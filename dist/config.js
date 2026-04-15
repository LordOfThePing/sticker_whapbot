/* eslint-disable @typescript-eslint/naming-convention */ var _process_env_BOT_NAME, _process_env_STICKER_PACK_NAME, _process_env_DEVS;
export var BOT_NAME = ((_process_env_BOT_NAME = process.env.BOT_NAME) === null || _process_env_BOT_NAME === void 0 ? void 0 : _process_env_BOT_NAME.length) ? process.env.BOT_NAME : "Stegripe WhatsApp Bot";
export var STICKER_PACK_NAME = ((_process_env_STICKER_PACK_NAME = process.env.STICKER_PACK_NAME) === null || _process_env_STICKER_PACK_NAME === void 0 ? void 0 : _process_env_STICKER_PACK_NAME.length) ? process.env.STICKER_PACK : "Stegripe Sticker Pack";
export var PREFIX = process.env.PREFIX;
export var ISDEV = process.env.NODE_ENV === "development";
var _process_env_DEVS_split;
export var DEVS = (_process_env_DEVS_split = (_process_env_DEVS = process.env.DEVS) === null || _process_env_DEVS === void 0 ? void 0 : _process_env_DEVS.split(",")) !== null && _process_env_DEVS_split !== void 0 ? _process_env_DEVS_split : [];
var pickPairPhoneDigits = function() {
    var fromEnv = process.env.PAIR_PHONE;
    var d = fromEnv ? String(fromEnv).replace(/\D/g, "") : "";
    if (d.length >= 10 && d.length <= 15) return d;
    if (DEVS.length) {
        var first = String(DEVS[0] || "").replace(/\D/g, "");
        if (first.length >= 10 && first.length <= 15) return first;
    }
    return "";
};
export var PAIR_PHONE_DIGITS = pickPairPhoneDigits();
export var WS = process.env.WS;
var toNumber = function(value, fallback) {
    var parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
};
var toBoolean = function(value, fallback) {
    if (value === undefined) return fallback;
    return value === "true";
};
export var MAX_CONCURRENT_REQUESTS = Math.max(1, toNumber(process.env.MAX_CONCURRENT_REQUESTS, 20));
export var MAX_WAITLIST_SIZE = Math.max(1, toNumber(process.env.MAX_WAITLIST_SIZE, 120));
export var MIN_SAFE_SEND_DELAY_MS = Math.max(0, toNumber(process.env.MIN_SAFE_SEND_DELAY_MS, 250));
export var MAX_SAFE_SEND_DELAY_MS = Math.max(MIN_SAFE_SEND_DELAY_MS, toNumber(process.env.MAX_SAFE_SEND_DELAY_MS, 900));
export var USER_COOLDOWN_MS = Math.max(0, toNumber(process.env.USER_COOLDOWN_MS, 600));
export var CHAT_COOLDOWN_MS = Math.max(0, toNumber(process.env.CHAT_COOLDOWN_MS, 350));
export var DEDUPE_WINDOW_MS = Math.max(0, toNumber(process.env.DEDUPE_WINDOW_MS, 2000));
export var BUSY_MESSAGE = (process.env.BUSY_MESSAGE || "Busy, please wait.").trim();
export var TOO_BUSY_MESSAGE = (process.env.TOO_BUSY_MESSAGE || "Too busy to handle right now, please try again later.").trim();
export var ALLOW_EXISTING_CHATS_ONLY = toBoolean(process.env.ALLOW_EXISTING_CHATS_ONLY, true);
export var KNOWN_CONTACTS_PATH = process.env.KNOWN_CONTACTS_PATH || "known_contacts.json";
var _process_env_LOG_FILE_PATH;
var _trimmed = (_process_env_LOG_FILE_PATH = process.env.LOG_FILE_PATH) !== null && _process_env_LOG_FILE_PATH !== void 0 ? String(_process_env_LOG_FILE_PATH).trim() : "";
export var LOG_FILE_PATH = _trimmed.length ? _trimmed : process.env.LOG_FILE_PATH === undefined ? "data/bot.log" : "";
export var LOG_MAX_STRING_CHARS = Math.max(32, toNumber(process.env.LOG_MAX_STRING_CHARS, 220));
export var FIRE_INIT_QUERIES = toBoolean(process.env.FIRE_INIT_QUERIES, false);
