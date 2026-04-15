function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
import ApplyMetadata from "#bajigur/decorators/ApplyMetadata.js";
import Listener from "#bajigur/structures/Listener.js";
import { DisconnectReason } from "@whiskeysockets/baileys";
import { cast } from "@sapphire/utilities";
import { existsSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
function summarizeStreamDisconnect(err) {
    var out = {
        streamCode: undefined,
        conflictType: undefined
    };
    if (!err || !err.data) return out;
    var node = err.data;
    if (node && node.attrs) out.streamCode = node.attrs.code;
    var content = node && node.content;
    if (Array.isArray(content)) {
        for(var i = 0; i < content.length; i++){
            var c = content[i];
            if (c && c.tag === "conflict" && c.attrs) out.conflictType = c.attrs.type;
        }
    }
    return out;
}
/** Clear session files without removing the directory (Docker bind mounts cannot be rmdir'd). */
function clearAuthStateContents(authDir, logger) {
    try {
        if (!existsSync(authDir)) return;
        var entries = readdirSync(authDir, {
            withFileTypes: true
        });
        for(var i = 0; i < entries.length; i++){
            var e = entries[i];
            rmSync(join(authDir, e.name), {
                recursive: true,
                force: true
            });
        }
    } catch (err) {
        logger.warn("Could not clear auth_state (non-fatal): ".concat(err instanceof Error ? err.message : "unknown"));
    }
}
var ConnectionUpdateListener = /*#__PURE__*/ function(Listener) {
    "use strict";
    _inherits(ConnectionUpdateListener, Listener);
    var _super = _create_super(ConnectionUpdateListener);
    function ConnectionUpdateListener() {
        _class_call_check(this, ConnectionUpdateListener);
        return _super.apply(this, arguments);
    }
    _create_class(ConnectionUpdateListener, [
        {
            key: "run",
            value: function run(param) {
                var lastDisconnect = param.lastDisconnect, connection = param.connection;
                var _this = this;
                return _async_to_generator(function() {
                    var _cast, shouldReconnect, _lastDisconnect_error, _lastDisconnect_error_message;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                shouldReconnect = ((_cast = cast(lastDisconnect === null || lastDisconnect === void 0 ? void 0 : lastDisconnect.error)) === null || _cast === void 0 ? void 0 : _cast.output.statusCode.toString()) !== DisconnectReason.loggedOut.toString();
                                if (!(connection === "close")) return [
                                    3,
                                    2
                                ];
                                {
                                    var _ld_err = lastDisconnect === null || lastDisconnect === void 0 ? void 0 : lastDisconnect.error;
                                    var _sum = summarizeStreamDisconnect(_ld_err);
                                    if (_sum.conflictType === "device_removed") {
                                        _this.client.logger.warn("WhatsApp reported linked device removed (conflict). On your phone: Settings > Linked devices — re-link or scan the new QR if session was cleared.");
                                    }
                                }
                                _this.client.logger.warn("Connection closed due to ".concat((_lastDisconnect_error_message = lastDisconnect === null || lastDisconnect === void 0 ? void 0 : (_lastDisconnect_error = lastDisconnect.error) === null || _lastDisconnect_error === void 0 ? void 0 : _lastDisconnect_error.message) !== null && _lastDisconnect_error_message !== void 0 ? _lastDisconnect_error_message : "unknown reason", ", reconnecting ").concat(shouldReconnect));
                                _this.client.listeners.disconnectAll();
                                if (!shouldReconnect) {
                                    clearAuthStateContents(join(process.cwd(), "auth_state"), _this.client.logger);
                                }
                                return [
                                    4,
                                    _this.client.connect()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 2:
                                if (!(connection === "open")) return [
                                    3,
                                    4
                                ];
                                _this.client.logger.info("Opened connection.");
                                return [
                                    4,
                                    _this.client.commands.init()
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ConnectionUpdateListener;
}(Listener);
export { ConnectionUpdateListener as default };
ConnectionUpdateListener = _ts_decorate([
    ApplyMetadata({
        name: "connection.update"
    })
], ConnectionUpdateListener);
