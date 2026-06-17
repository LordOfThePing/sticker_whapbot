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
import ReadDirRecursive from "#bajigur/utils/ReadDirRecursive.js";
import { DEVS, ISDEV, PREFIX } from "#bajigur/config.js";
import ImportClass from "#bajigur/utils/ImportClass.js";
import { Collection } from "@discordjs/collection";
import { mergeDefault } from "@sapphire/utilities";
import { resolve } from "node:path";
var Command = /*#__PURE__*/ function() {
    "use strict";
    function Command(client, meta) {
        _class_call_check(this, Command);
        _define_property(this, "client", void 0);
        _define_property(this, "meta", void 0);
        this.client = client;
        this.meta = meta;
    }
    _create_class(Command, [
        {
            key: "run",
            value: function run(_args, _data) {
                this.client.logger.info("Command ".concat(this.meta.name, " is not yet implemented."));
            }
        }
    ]);
    return Command;
}();
export { Command as default };
var DefaultCommandMetadata = {
    aliases: [],
    description: "",
    devOnly: false,
    category: "",
    name: "",
    usage: "",
    allowSelfRun: false
};
export var CommandHandler = /*#__PURE__*/ function(Collection1) {
    "use strict";
    _inherits(CommandHandler, Collection1);
    var _super = _create_super(CommandHandler);
    function CommandHandler(client, path) {
        _class_call_check(this, CommandHandler);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "client", void 0);
        _define_property(_assert_this_initialized(_this), "path", void 0);
        _define_property(_assert_this_initialized(_this), "categories", void 0);
        _define_property(_assert_this_initialized(_this), "aliases", void 0);
        _define_property(_assert_this_initialized(_this), "isReady", void 0);
        _this.client = client;
        _this.path = path;
        _this.categories = {};
        _this.aliases = new Collection();
        _this.isReady = false;
        return _this;
    }
    _create_class(CommandHandler, [
        {
            key: "init",
            value: function init() {
                var _this = this;
                return _async_to_generator(function() {
                    var files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, err, err1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.isReady) {
                                    _this.client.logger.info("Commands already registered, skipping re-init.");
                                    return [
                                        2
                                    ];
                                }
                                _state.trys.push([
                                    0,
                                    9,
                                    10,
                                    11
                                ]);
                                files = ReadDirRecursive(_this.path);
                                _this.client.logger.info("Found ".concat(files.length, " commands, registering..."));
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
                                    var path, command, _command_meta_aliases, category;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                path = _step.value;
                                                return [
                                                    4,
                                                    ImportClass(resolve(path), _this.client)
                                                ];
                                            case 1:
                                                command = _state.sent();
                                                if (command) {
                                                    ;
                                                    category = path.split(/\/|\\/g).slice(0, -1).pop().toLowerCase();
                                                    command.meta = Object.freeze(Object.assign(mergeDefault(DefaultCommandMetadata, Object.assign({}, command.meta)), {
                                                        category: category,
                                                        path: path
                                                    }));
                                                    _this.set(command.meta.name, command);
                                                    if ((_command_meta_aliases = command.meta.aliases) === null || _command_meta_aliases === void 0 ? void 0 : _command_meta_aliases.length) {
                                                        command.meta.aliases.map(function(alias) {
                                                            return _this.aliases.set(alias, command.meta.name);
                                                        });
                                                    }
                                                    _this.client.logger.info("Registered ".concat(command.meta.name, " in category ").concat(category, "."));
                                                } else {
                                                    _this.client.logger.warn("Invalid command file: ".concat(path, "."));
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
                                _this.categories = _this.reduce(function(a, b) {
                                    var _a_b_meta_category;
                                    var _a_b_meta_category1;
                                    a[b.meta.category] = (_a_b_meta_category1 = a[b.meta.category]) !== null && _a_b_meta_category1 !== void 0 ? _a_b_meta_category1 : [];
                                    (_a_b_meta_category = a[b.meta.category]) === null || _a_b_meta_category === void 0 ? void 0 : _a_b_meta_category.push(b);
                                    return a;
                                }, {});
                                _this.client.logger.info("All categories has been registered.");
                                _this.isReady = true;
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
            key: "handle",
            value: function handle(content, message) {
                var _parseArgs_shift;
                var parseArgs = content.slice(PREFIX.length).trim().split(/ +/g);
                var _parseArgs_shift_toLowerCase;
                var commandArgs = (_parseArgs_shift_toLowerCase = (_parseArgs_shift = parseArgs.shift()) === null || _parseArgs_shift === void 0 ? void 0 : _parseArgs_shift.toLowerCase()) !== null && _parseArgs_shift_toLowerCase !== void 0 ? _parseArgs_shift_toLowerCase : "";
                var _this_aliases_get, _this_get;
                var getCommand = (_this_get = this.get(commandArgs)) !== null && _this_get !== void 0 ? _this_get : this.get((_this_aliases_get = this.aliases.get(commandArgs)) !== null && _this_aliases_get !== void 0 ? _this_aliases_get : "");
                if (!getCommand) return Promise.resolve();
                if (message.key.fromMe && !getCommand.meta.allowSelfRun) return Promise.resolve();
                if (this.isDev(getCommand, message)) return Promise.resolve();
                var _this1 = this;
                try {
                    return Promise.resolve(getCommand.run(parseArgs, message)).catch(function(err) {
                        _this1.client.logger.error(err);
                    }).finally(function() {
                        _this1.client.logger.info("".concat(message.pushName, "(").concat(message.key.remoteJid, ") is using ").concat(getCommand.meta.name, " command from ").concat(getCommand.meta.category, " category on chat ").concat(message.key.remoteJid, "."));
                    });
                } catch (err) {
                    this.client.logger.error(err);
                    return Promise.resolve();
                }
            }
        },
        {
            key: "isDev",
            value: function isDev(command, message) {
                var _command_meta_devOnly;
                return ((_command_meta_devOnly = command.meta.devOnly) !== null && _command_meta_devOnly !== void 0 ? _command_meta_devOnly : ISDEV) && !DEVS.includes(message.key.remoteJid.split("@")[0]);
            }
        }
    ]);
    return CommandHandler;
}(Collection);
