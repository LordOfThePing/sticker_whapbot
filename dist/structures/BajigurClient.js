function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import ImportURLToString from "#bajigur/utils/ImportURLToString.js";
import { ISDEV, LOG_FILE_PATH, LOG_MAX_STRING_CHARS, FIRE_INIT_QUERIES, PAIR_PHONE_DIGITS } from "#bajigur/config.js";
import { truncateForPino } from "#bajigur/utils/LogSanitize.js";
import ThrottleQueue from "#bajigur/utils/ThrottleQueue.js";
import SafetyPolicy from "#bajigur/utils/SafetyPolicy.js";
import SafeSender from "#bajigur/utils/SafeSender.js";
import { ListenerHandler } from "./Listener.js";
import { CommandHandler } from "./Command.js";
import { fetchLatestWaWebVersion, makeCacheableSignalKeyStore, makeWASocket, useMultiFileAuthState } from "@whiskeysockets/baileys";
import { pino } from "pino";
import { createRequire } from "module";
import { resolve } from "path";
var nodeRequire = createRequire(import.meta.url);
var BajigurClient = /*#__PURE__*/ function() {
    "use strict";
    function BajigurClient() {
        _class_call_check(this, BajigurClient);
        _define_property(this, "socket", void 0);
        _define_property(this, "authState", void 0);
        _define_property(this, "throttleQueue", void 0);
        _define_property(this, "safetyPolicy", void 0);
        _define_property(this, "safeSender", void 0);
        _define_property(this, "_pairingCodeRequested", false);
        _define_property(this, "_pairingHintLogged", false);
        var logTargets = [
            {
                target: "pino-pretty",
                level: ISDEV ? "debug" : "info",
                options: {
                    translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
                    singleLine: true
                }
            }
        ];
        if (LOG_FILE_PATH && LOG_FILE_PATH.length) {
            logTargets.push({
                target: "pino/file",
                level: ISDEV ? "debug" : "info",
                options: {
                    destination: LOG_FILE_PATH,
                    append: true,
                    mkdir: true
                }
            });
        }
        _define_property(this, "logger", pino({
            name: "Bajigur",
            formatters: {
                bindings: function() {
                    return {
                        pid: "Bajigur@".concat(process.pid)
                    };
                }
            },
            level: ISDEV ? "debug" : "info",
            timestamp: true,
            hooks: {
                logMethod: function logMethod(args, method, level) {
                    var a = Array.prototype.slice.call(args);
                    var first = a.length >= 2 ? a[0] : undefined;
                    if (first !== null && first !== undefined && typeof first === "object" && !Buffer.isBuffer(first)) {
                        var copy = truncateForPino(first, LOG_MAX_STRING_CHARS, 0, 8, new WeakSet());
                        if (typeof copy.trace === "string" && copy.trace.length > 500) {
                            copy.trace = copy.trace.slice(0, 480).concat("…");
                        }
                        a[0] = copy;
                    }
                    if (level >= 50 && a.length >= 2) {
                        var m = a[a.length - 1];
                        var o = a[0];
                        if (m === "stream errored out" && o && o.node && o.node.attrs && o.node.attrs.code === "515") {
                            return this.warn({
                                code: "515"
                            }, "stream restart required (expected after pairing)");
                        }
                        if (typeof m === "string" && m.indexOf("unexpected error in 'init queries'") !== -1 && o && o.err && o.err.message === "bad-request") {
                            return this.warn({
                                err: "bad-request"
                            }, "init queries failed (bad-request); connection often still works — disable with FIRE_INIT_QUERIES=false");
                        }
                    }
                    return method.apply(this, a);
                }
            },
            transport: {
                targets: logTargets
            }
        }));
        _define_property(this, "commands", new CommandHandler(this, resolve(ImportURLToString(import.meta.url), "..", "commands")));
        _define_property(this, "listeners", new ListenerHandler(this, resolve(ImportURLToString(import.meta.url), "..", "listeners")));
        _define_property(this, "throttleQueue", new ThrottleQueue());
        _define_property(this, "safetyPolicy", new SafetyPolicy(this.logger));
        _define_property(this, "safeSender", new SafeSender(this, this.safetyPolicy));
    }
    _create_class(BajigurClient, [
        {
            key: "safeSend",
            value: function safeSend(jid, content, options) {
                return this.safeSender.send(jid, content, options);
            }
        },
        {
            key: "connect",
            value: function connect() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    useMultiFileAuthState("auth_state")
                                ];
                            case 1:
                                _this.authState = _state.sent();
                                return [
                                    4,
                                    fetchLatestWaWebVersion()
                                ];
                            case 2:
                                var waFetch = _state.sent();
                                var socketOpts = {
                                    logger: _this.logger,
                                    fireInitQueries: FIRE_INIT_QUERIES,
                                    auth: {
                                        creds: _this.authState.state.creds,
                                        keys: makeCacheableSignalKeyStore(_this.authState.state.keys, _this.logger)
                                    }
                                };
                                if (waFetch && waFetch.isLatest && waFetch.version) {
                                    socketOpts.version = waFetch.version;
                                    _this.logger.info({
                                        version: waFetch.version
                                    }, "Using live WA Web client revision (sw.js)");
                                } else {
                                    _this.logger.warn("Could not fetch live WA Web version; using bundled Baileys default");
                                }
                                _this.socket = makeWASocket(socketOpts);
                                _this.socket.ev.on('connection.update', function(update) {
                                    var qr = update.qr;
                                    var connection = update.connection;
                                    if (connection === 'close') {
                                        _this._pairingCodeRequested = false;
                                    }
                                    if (update.isNewLogin) {
                                        _this._pairingCodeRequested = false;
                                    }
                                    if (qr) {
                                        var qrcode = nodeRequire('qrcode-terminal');
                                        qrcode.generate(qr, {
                                            small: true
                                        });
                                        if (PAIR_PHONE_DIGITS.length >= 10) {
                                            if (!_this._pairingCodeRequested && typeof _this.socket.requestPairingCode === 'function') {
                                                _this._pairingCodeRequested = true;
                                                _this.socket.requestPairingCode(PAIR_PHONE_DIGITS).then(function(code) {
                                                    var raw = typeof code === 'string' ? code : String(code);
                                                    var spaced = raw.length === 8 ? "".concat(raw.slice(0, 4), "-").concat(raw.slice(4)) : raw;
                                                    _this.logger.warn("Pairing code: ".concat(spaced, " — on your phone: WhatsApp → Settings → Linked devices → Link with phone number instead"));
                                                }).catch(function(err) {
                                                    _this._pairingCodeRequested = false;
                                                    _this.logger.warn("Pairing code unavailable (use QR): ".concat(err instanceof Error ? err.message : String(err)));
                                                });
                                            }
                                        } else if (!_this._pairingHintLogged) {
                                            _this._pairingHintLogged = true;
                                            _this.logger.info("Set PAIR_PHONE (or DEVS with a full international number) to digits-only to also print an 8-character link code when the QR is unreadable.");
                                        }
                                    }
                                });
                                return [
                                    4,
                                    _this.listeners.init()
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return BajigurClient;
}();
export { BajigurClient as default };
