import { CHAT_COOLDOWN_MS, DEDUPE_WINDOW_MS, KNOWN_CONTACTS_PATH, USER_COOLDOWN_MS } from "#bajigur/config.js";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
var CONTACT_KIND = "@s.whatsapp.net";
var extractUserId = function(jid) {
    return (jid || "").split("@")[0];
};
var now = function() {
    return Date.now();
};
var SafetyPolicy = /*#__PURE__*/ function() {
    "use strict";
    function SafetyPolicy(logger, options) {
        if (options === void 0) options = {};
        this.logger = logger;
        this.userCooldownMs = Math.max(0, options.userCooldownMs || USER_COOLDOWN_MS);
        this.chatCooldownMs = Math.max(0, options.chatCooldownMs || CHAT_COOLDOWN_MS);
        this.dedupeWindowMs = Math.max(0, options.dedupeWindowMs || DEDUPE_WINDOW_MS);
        this.contactsPath = resolve(process.cwd(), options.contactsPath || KNOWN_CONTACTS_PATH);
        this.knownContacts = new Set();
        this.userLastActionAt = new Map();
        this.chatLastActionAt = new Map();
        this.commandLastAt = new Map();
        this.noticeLastAt = new Map();
        this.loadKnownContacts();
    }
    var _proto = SafetyPolicy.prototype;
    _proto.loadKnownContacts = function loadKnownContacts() {
        try {
            if (!existsSync(this.contactsPath)) return;
            var raw = readFileSync(this.contactsPath, "utf8");
            if (!raw.trim()) return;
            var parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                for(var i = 0; i < parsed.length; i += 1){
                    this.knownContacts.add(String(parsed[i]));
                }
            }
        } catch (err) {
            this.logger.warn("Failed to read known contacts: ".concat(err instanceof Error ? err.message : "unknown error"));
        }
    };
    _proto.saveKnownContacts = function saveKnownContacts() {
        try {
            writeFileSync(this.contactsPath, JSON.stringify(Array.from(this.knownContacts), null, 2));
        } catch (err) {
            this.logger.warn("Failed to save known contacts: ".concat(err instanceof Error ? err.message : "unknown error"));
        }
    };
    _proto.markKnown = function markKnown(jid) {
        if (!jid || !jid.endsWith(CONTACT_KIND)) return;
        var userId = extractUserId(jid);
        if (!userId.length || this.knownContacts.has(userId)) return;
        this.knownContacts.add(userId);
        this.saveKnownContacts();
    };
    _proto.isKnownContact = function isKnownContact(jid) {
        if (!jid || !jid.endsWith(CONTACT_KIND)) return true;
        return this.knownContacts.has(extractUserId(jid));
    };
    _proto.shouldNotify = function shouldNotify(key, windowMs) {
        var nowMs = now();
        var lastAt = this.noticeLastAt.get(key) || 0;
        if (nowMs - lastAt < windowMs) return false;
        this.noticeLastAt.set(key, nowMs);
        return true;
    };
    _proto.evaluateInbound = function evaluateInbound(jid, senderId, commandText) {
        var nowMs = now();
        var userKey = senderId || "";
        var chatKey = jid || "";
        if (this.userCooldownMs > 0) {
            var lastUser = this.userLastActionAt.get(userKey) || 0;
            if (nowMs - lastUser < this.userCooldownMs) return {
                allow: false,
                reason: "user-cooldown"
            };
        }
        if (this.chatCooldownMs > 0) {
            var lastChat = this.chatLastActionAt.get(chatKey) || 0;
            if (nowMs - lastChat < this.chatCooldownMs) return {
                allow: false,
                reason: "chat-cooldown"
            };
        }
        var dedupeKey = "".concat(userKey, "|").concat(commandText);
        var lastCommand = this.commandLastAt.get(dedupeKey) || 0;
        if (this.dedupeWindowMs > 0 && nowMs - lastCommand < this.dedupeWindowMs) {
            return {
                allow: false,
                reason: "dedupe"
            };
        }
        this.userLastActionAt.set(userKey, nowMs);
        this.chatLastActionAt.set(chatKey, nowMs);
        this.commandLastAt.set(dedupeKey, nowMs);
        return {
            allow: true
        };
    };
    return SafetyPolicy;
}();
export { SafetyPolicy as default, extractUserId };
