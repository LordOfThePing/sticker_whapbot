function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
import readdirRecursive from "#bajigur/utils/ReadDirRecursive.js";
import importClass from "#bajigur/utils/ImportClass.js";
import { Collection } from "@discordjs/collection";
import { resolve } from "path";
var Listener = /*#__PURE__*/ function() {
    "use strict";
    function Listener(client, meta) {
        _class_call_check(this, Listener);
        _define_property(this, "client", void 0);
        _define_property(this, "meta", void 0);
        this.client = client;
        this.meta = meta;
    }
    _create_class(Listener, [
        {
            key: "run",
            value: function run(_data) {
                this.client.logger.info("Event ".concat(this.meta.name, " is not yet implemented."));
            }
        }
    ]);
    return Listener;
}();
export { Listener as default };
export var ListenerHandler = /*#__PURE__*/ function() {
    "use strict";
    function ListenerHandler(client, path) {
        _class_call_check(this, ListenerHandler);
        _define_property(this, "client", void 0);
        _define_property(this, "path", void 0);
        _define_property(this, "list", void 0);
        this.client = client;
        this.path = path;
        this.list = new Collection();
    }
    _create_class(ListenerHandler, [
        {
            key: "init",
            value: function init() {
                var _this = this;
                return _async_to_generator(function() {
                    var files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, err, err1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    9,
                                    10,
                                    11
                                ]);
                                files = readdirRecursive(_this.path);
                                _this.client.logger.info("Found ".concat(files.length, " listeners, registering..."));
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _loop = function() {
                                    var file, event, _event, _this_client_socket;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                file = _step.value;
                                                return [
                                                    4,
                                                    importClass(resolve(file), _this.client)
                                                ];
                                            case 1:
                                                event = _state.sent();
                                                if (event) {
                                                    ;
                                                    ;
                                                    (_this_client_socket = _this.client.socket) === null || _this_client_socket === void 0 ? void 0 : _this_client_socket.ev.on(event.meta.name, function() {
                                                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                                            args[_key] = arguments[_key];
                                                        }
                                                        return (_event = event).run.apply(_event, _to_consumable_array(args));
                                                    });
                                                    _this.client.logger.info("Registered ".concat(event.meta.name, " listener."));
                                                    _this.list.set(event.meta.name, event);
                                                } else {
                                                    _this.client.logger.warn("Invalid event file: ".concat(file, "."));
                                                }
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                };
                                _iterator = files[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                return [
                                    5,
                                    _ts_values(_loop())
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                return [
                                    3,
                                    11
                                ];
                            case 9:
                                err1 = _state.sent();
                                _this.client.logger.error(err1);
                                return [
                                    3,
                                    11
                                ];
                            case 10:
                                _this.client.logger.info("Done loading events.");
                                return [
                                    7
                                ];
                            case 11:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "disconnectAll",
            value: function disconnectAll() {
                var _this = this;
                this.list.map(function(event) {
                    var _this_client_socket;
                    (_this_client_socket = _this.client.socket) === null || _this_client_socket === void 0 ? void 0 : _this_client_socket.ev.off(event.meta.name, event.run);
                    _this.client.logger.info("Unregistered ".concat(event.meta.name, " listener."));
                });
            }
        }
    ]);
    return ListenerHandler;
}();
