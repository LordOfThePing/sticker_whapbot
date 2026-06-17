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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
import { BOT_NAME, STICKER_PACK_NAME } from "#bajigur/config.js";
import ApplyMetadata from "#bajigur/decorators/ApplyMetadata.js";
import Command from "#bajigur/structures/Command.js";
import GetMediaTypeFromBuffer from "#bajigur/utils/GetMediaTypeFromBuffer.js";
import PrepareMemeMedia from "#bajigur/utils/PrepareMemeMedia.js";
import { WAProto, downloadMediaMessage } from "@whiskeysockets/baileys";
import { unlinkSync, writeFileSync } from "fs";
import { createSticker } from "wa-sticker";
import { join } from "path";
var MAX_VIDEO_SECONDS = 10;
var DOWNLOAD_TIMEOUT_MS = 90000;
var STICKER_TIMEOUT_MS = 180000;
function getMessageVideoSeconds(message) {
    var _message_message, _message_message_videoMessage, _message_message1, _message_message_documentWithCaptionMessage_message, _message_message_documentWithCaptionMessage, _message_message_documentWithCaptionMessage_message_videoMessage;
    var video = (_message_message = message.message) === null || _message_message === void 0 ? void 0 : (_message_message_videoMessage = _message_message.videoMessage) !== null && _message_message_videoMessage !== void 0 ? _message_message_videoMessage : (_message_message1 = message.message) === null || _message_message1 === void 0 ? void 0 : (_message_message_documentWithCaptionMessage = _message_message1.documentWithCaptionMessage) === null || _message_message_documentWithCaptionMessage === void 0 ? void 0 : (_message_message_documentWithCaptionMessage_message = _message_message_documentWithCaptionMessage.message) === null || _message_message_documentWithCaptionMessage_message === void 0 ? void 0 : (_message_message_documentWithCaptionMessage_message_videoMessage = _message_message_documentWithCaptionMessage_message.videoMessage) !== null && _message_message_documentWithCaptionMessage_message_videoMessage !== void 0 ? _message_message_documentWithCaptionMessage_message_videoMessage : undefined;
    if (!video || video.seconds === undefined || video.seconds === null) return null;
    return Number(video.seconds);
}
function tooLongVideoMessage(seconds) {
    return "Please use Video or GIF with duration under ".concat(MAX_VIDEO_SECONDS, " seconds. This video is ").concat(seconds, "s.");
}
function stickerFailureMessage(err) {
    var msg = err && (err.message || String(err)) || "unknown error";
    if (/timed out/i.test(msg)) return "Sticker conversion timed out. Please use a video under ".concat(MAX_VIDEO_SECONDS, " seconds or a smaller image.");
    if (/too large/i.test(msg)) return "Sticker file is too large to send on WhatsApp. Try a shorter video or lower-resolution image.";
    if (/duration|10 second/i.test(msg)) return msg;
    return "Failed to create sticker: ".concat(msg);
}
function promiseWithTimeout(promise, ms, label) {
    return new Promise(function(resolve, reject) {
        var timer = setTimeout(function() {
            reject(new Error("".concat(label, " timed out after ").concat(Math.round(ms / 1000), "s")));
        }, ms);
        Promise.resolve(promise).then(function(value) {
            clearTimeout(timer);
            resolve(value);
        }).catch(function(err) {
            clearTimeout(timer);
            reject(err);
        });
    });
}
var StickerCommand = /*#__PURE__*/ function(Command) {
    "use strict";
    _inherits(StickerCommand, Command);
    var _super = _create_super(StickerCommand);
    function StickerCommand() {
        _class_call_check(this, StickerCommand);
        return _super.apply(this, arguments);
    }
    _create_class(StickerCommand, [
        {
            key: "run",
            value: function run(args, data) {
                var _this = this;
                return _async_to_generator(function() {
                    var _data_message, _data_message1, _data_message2, _data_message_extendedTextMessage_contextInfo_quotedMessage, _data_message_extendedTextMessage_contextInfo, _data_message_extendedTextMessage, _data_message3, _data_message_extendedTextMessage_contextInfo_quotedMessage1, _data_message_extendedTextMessage_contextInfo1, _data_message_extendedTextMessage1, _data_message4, _data_message_extendedTextMessage_contextInfo_quotedMessage2, _data_message_extendedTextMessage_contextInfo2, _data_message_extendedTextMessage2, _data_message5, _data_message_extendedTextMessage_contextInfo_quotedMessage3, _data_message_extendedTextMessage_contextInfo3, _data_message_extendedTextMessage3, _data_message6, _data_message_extendedTextMessage_contextInfo4, _data_message_extendedTextMessage4, _data_message7, _this_client_socket, _data_message_imageMessage, _data_message_videoMessage, _data_message_videoMessage_seconds, _this_client_socket1, _data_message_documentWithCaptionMessage_message_videoMessage, _data_message_documentWithCaptionMessage_message, _data_message_documentWithCaptionMessage_message_videoMessage_seconds, _this_client_socket2, _data_message_extendedTextMessage_contextInfo_quotedMessage_imageMessage, _ref, _data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage, _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage, _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage, _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo, _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage, _data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage_seconds, _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage_seconds, _this_client_socket3, _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage, _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message, _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage_seconds, _this_client_socket4;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!((_data_message_imageMessage = (_data_message = data.message) === null || _data_message === void 0 ? void 0 : _data_message.imageMessage) !== null && _data_message_imageMessage !== void 0 ? _data_message_imageMessage : (_data_message1 = data.message) === null || _data_message1 === void 0 ? void 0 : _data_message1.videoMessage)) return [
                                    3,
                                    3
                                ];
                                if (!(((_data_message_videoMessage_seconds = (_data_message_videoMessage = data.message.videoMessage) === null || _data_message_videoMessage === void 0 ? void 0 : _data_message_videoMessage.seconds) !== null && _data_message_videoMessage_seconds !== void 0 ? _data_message_videoMessage_seconds : 0) >= MAX_VIDEO_SECONDS)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.client.safeSend(data.key.remoteJid, {
                                        text: tooLongVideoMessage(Number((_data_message_videoMessage_seconds = (_data_message_videoMessage = data.message.videoMessage) === null || _data_message_videoMessage === void 0 ? void 0 : _data_message_videoMessage.seconds) !== null && _data_message_videoMessage_seconds !== void 0 ? _data_message_videoMessage_seconds : 0))
                                    }, {
                                        quoted: data
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    undefined
                                ];
                            case 2:
                                return [
                                    2,
                                    _this.safeConvertToSticker(data.key.remoteJid, data, data, args)
                                ];
                            case 3:
                                if (!((_data_message2 = data.message) === null || _data_message2 === void 0 ? void 0 : _data_message2.documentWithCaptionMessage)) return [
                                    3,
                                    6
                                ];
                                if (!(((_data_message_documentWithCaptionMessage_message_videoMessage_seconds = (_data_message_documentWithCaptionMessage_message = data.message.documentWithCaptionMessage.message) === null || _data_message_documentWithCaptionMessage_message === void 0 ? void 0 : (_data_message_documentWithCaptionMessage_message_videoMessage = _data_message_documentWithCaptionMessage_message.videoMessage) === null || _data_message_documentWithCaptionMessage_message_videoMessage === void 0 ? void 0 : _data_message_documentWithCaptionMessage_message_videoMessage.seconds) !== null && _data_message_documentWithCaptionMessage_message_videoMessage_seconds !== void 0 ? _data_message_documentWithCaptionMessage_message_videoMessage_seconds : 0) >= MAX_VIDEO_SECONDS)) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    _this.client.safeSend(data.key.remoteJid, {
                                        text: tooLongVideoMessage(Number((_data_message_documentWithCaptionMessage_message_videoMessage_seconds = (_data_message_documentWithCaptionMessage_message = data.message.documentWithCaptionMessage.message) === null || _data_message_documentWithCaptionMessage_message === void 0 ? void 0 : (_data_message_documentWithCaptionMessage_message_videoMessage = _data_message_documentWithCaptionMessage_message.videoMessage) === null || _data_message_documentWithCaptionMessage_message_videoMessage === void 0 ? void 0 : _data_message_documentWithCaptionMessage_message_videoMessage.seconds) !== null && _data_message_documentWithCaptionMessage_message_videoMessage_seconds !== void 0 ? _data_message_documentWithCaptionMessage_message_videoMessage_seconds : 0))
                                    }, {
                                        quoted: data
                                    })
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    2,
                                    undefined
                                ];
                            case 5:
                                return [
                                    2,
                                    _this.safeConvertToSticker(data.key.remoteJid, WAProto.WebMessageInfo.create(_object_spread_props(_object_spread({}, data), {
                                        message: data.message.documentWithCaptionMessage.message
                                    })), data, args)
                                ];
                            case 6:
                                if (!((_ref = (_data_message_extendedTextMessage_contextInfo_quotedMessage_imageMessage = (_data_message3 = data.message) === null || _data_message3 === void 0 ? void 0 : (_data_message_extendedTextMessage = _data_message3.extendedTextMessage) === null || _data_message_extendedTextMessage === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo = _data_message_extendedTextMessage.contextInfo) === null || _data_message_extendedTextMessage_contextInfo === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo_quotedMessage = _data_message_extendedTextMessage_contextInfo.quotedMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage === void 0 ? void 0 : _data_message_extendedTextMessage_contextInfo_quotedMessage.imageMessage) !== null && _data_message_extendedTextMessage_contextInfo_quotedMessage_imageMessage !== void 0 ? _data_message_extendedTextMessage_contextInfo_quotedMessage_imageMessage : (_data_message4 = data.message) === null || _data_message4 === void 0 ? void 0 : (_data_message_extendedTextMessage1 = _data_message4.extendedTextMessage) === null || _data_message_extendedTextMessage1 === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo1 = _data_message_extendedTextMessage1.contextInfo) === null || _data_message_extendedTextMessage_contextInfo1 === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo_quotedMessage1 = _data_message_extendedTextMessage_contextInfo1.quotedMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage1 === void 0 ? void 0 : _data_message_extendedTextMessage_contextInfo_quotedMessage1.videoMessage) !== null && _ref !== void 0 ? _ref : (_data_message5 = data.message) === null || _data_message5 === void 0 ? void 0 : (_data_message_extendedTextMessage2 = _data_message5.extendedTextMessage) === null || _data_message_extendedTextMessage2 === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo2 = _data_message_extendedTextMessage2.contextInfo) === null || _data_message_extendedTextMessage_contextInfo2 === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo_quotedMessage2 = _data_message_extendedTextMessage_contextInfo2.quotedMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage2 === void 0 ? void 0 : _data_message_extendedTextMessage_contextInfo_quotedMessage2.documentMessage)) return [
                                    3,
                                    9
                                ];
                                if (!(((_data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage_seconds = (_data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage = data.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage === void 0 ? void 0 : _data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage.seconds) !== null && _data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage_seconds !== void 0 ? _data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage_seconds : 0) >= MAX_VIDEO_SECONDS || ((_data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage_seconds = (_data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage = data.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo = _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage.contextInfo) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage = _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo.quotedMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage = _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage.videoMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage === void 0 ? void 0 : _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage.seconds) !== null && _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage_seconds !== void 0 ? _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage_seconds : 0) >= MAX_VIDEO_SECONDS)) return [
                                    3,
                                    8
                                ];
                                return [
                                    4,
                                    _this.client.safeSend(data.key.remoteJid, {
                                        text: tooLongVideoMessage(getMessageVideoSeconds(WAProto.WebMessageInfo.create(_object_spread_props(_object_spread({}, data), {
                                            message: data.message.extendedTextMessage.contextInfo.quotedMessage
                                        }))) || Math.max(Number((_data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage_seconds = (_data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage = data.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage === void 0 ? void 0 : _data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage.seconds) !== null && _data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage_seconds !== void 0 ? _data_message_extendedTextMessage_contextInfo_quotedMessage_videoMessage_seconds : 0), Number((_data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage_seconds = (_data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage = data.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo = _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage.contextInfo) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage = _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo.quotedMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage = _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage.videoMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage === void 0 ? void 0 : _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage.seconds) !== null && _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage_seconds !== void 0 ? _data_message_extendedTextMessage_contextInfo_quotedMessage_documentMessage_contextInfo_quotedMessage_videoMessage_seconds : 0)))
                                    }, {
                                        quoted: data
                                    })
                                ];
                            case 7:
                                _state.sent();
                                return [
                                    2,
                                    undefined
                                ];
                            case 8:
                                return [
                                    2,
                                    _this.safeConvertToSticker(data.key.remoteJid, WAProto.WebMessageInfo.create(_object_spread_props(_object_spread({}, data), {
                                        message: data.message.extendedTextMessage.contextInfo.quotedMessage
                                    })), data, args)
                                ];
                            case 9:
                                if (!((_data_message6 = data.message) === null || _data_message6 === void 0 ? void 0 : (_data_message_extendedTextMessage3 = _data_message6.extendedTextMessage) === null || _data_message_extendedTextMessage3 === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo3 = _data_message_extendedTextMessage3.contextInfo) === null || _data_message_extendedTextMessage_contextInfo3 === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo_quotedMessage3 = _data_message_extendedTextMessage_contextInfo3.quotedMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage3 === void 0 ? void 0 : _data_message_extendedTextMessage_contextInfo_quotedMessage3.documentWithCaptionMessage)) return [
                                    3,
                                    12
                                ];
                                if (!(((_data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage_seconds = (_data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message = data.message.extendedTextMessage.contextInfo.quotedMessage.documentWithCaptionMessage.message) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage = _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message.videoMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage === void 0 ? void 0 : _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage.seconds) !== null && _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage_seconds !== void 0 ? _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage_seconds : 0) >= MAX_VIDEO_SECONDS)) return [
                                    3,
                                    11
                                ];
                                return [
                                    4,
                                    _this.client.safeSend(data.key.remoteJid, {
                                        text: tooLongVideoMessage(Number((_data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage_seconds = (_data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message = data.message.extendedTextMessage.contextInfo.quotedMessage.documentWithCaptionMessage.message) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage = _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message.videoMessage) === null || _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage === void 0 ? void 0 : _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage.seconds) !== null && _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage_seconds !== void 0 ? _data_message_extendedTextMessage_contextInfo_quotedMessage_documentWithCaptionMessage_message_videoMessage_seconds : 0))
                                    }, {
                                        quoted: data
                                    })
                                ];
                            case 10:
                                _state.sent();
                                return [
                                    2,
                                    undefined
                                ];
                            case 11:
                                return [
                                    2,
                                    _this.safeConvertToSticker(data.key.remoteJid, WAProto.WebMessageInfo.create(_object_spread_props(_object_spread({}, data), {
                                        message: data.message.extendedTextMessage.contextInfo.quotedMessage.documentWithCaptionMessage.message
                                    })), data, args)
                                ];
                            case 12:
                                return [
                                    4,
                                    _this.client.safeSend(data.key.remoteJid, {
                                        text: "Please send an image, video, or GIF with */sticker* caption or reply it on the file. You can also send an image as document by replying it with */sticker* too."
                                    }, {
                                        quoted: ((_data_message7 = data.message) === null || _data_message7 === void 0 ? void 0 : (_data_message_extendedTextMessage4 = _data_message7.extendedTextMessage) === null || _data_message_extendedTextMessage4 === void 0 ? void 0 : (_data_message_extendedTextMessage_contextInfo4 = _data_message_extendedTextMessage4.contextInfo) === null || _data_message_extendedTextMessage_contextInfo4 === void 0 ? void 0 : _data_message_extendedTextMessage_contextInfo4.quotedMessage) ? WAProto.WebMessageInfo.create(_object_spread_props(_object_spread({}, data), {
                                            message: data.message.extendedTextMessage.contextInfo.quotedMessage
                                        })) : data
                                    })
                                ];
                            case 13:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "safeConvertToSticker",
            value: function safeConvertToSticker(Jid, message, from, args) {
                var _this = this;
                return _this.convertToSticker(Jid, message, from, args).catch(function(err) {
                    _this.client.logger.error(err);
                    return _this.client.safeSend(Jid, {
                        text: stickerFailureMessage(err)
                    }, {
                        quoted: from
                    });
                });
            }
        },
        {
            key: "convertToSticker",
            value: function convertToSticker(Jid, message, from, args) {
                var _this = this;
                return _async_to_generator(function() {
                    var _message_message_videoMessage_seconds, _message_message, _message_message_videoMessage, convertingMessage, videoSeconds, buffer, fileExtension, fileName, filePath, memeCaption, memeHint, memeResult, quality, stickerOptions, stickerBuffer, sticker, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                videoSeconds = getMessageVideoSeconds(message);
                                if (!(videoSeconds !== null && videoSeconds >= MAX_VIDEO_SECONDS)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.client.safeSend(Jid, {
                                        text: tooLongVideoMessage(videoSeconds)
                                    }, {
                                        quoted: from
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                            case 2:
                                memeHint = (args === null || args === void 0 ? void 0 : args.length) ? args.join(" ").trim() : "";
                                return [
                                    4,
                                    _this.client.safeSend(Jid, {
                                        text: memeHint.length ? "_Adding caption & converting to sticker..._" : "_Converting to sticker..._"
                                    })
                                ];
                            case 3:
                                convertingMessage = _state.sent();
                                filePath = undefined;
                                _state.trys.push([
                                    4,
                                    14,
                                    ,
                                    15
                                ]);
                                return [
                                    4,
                                    promiseWithTimeout(downloadMediaMessage(message, "buffer", {}, {
                                        logger: _this.client.logger,
                                        reuploadRequest: _this.client.socket.updateMediaMessage.bind(_this.client.socket)
                                    }), DOWNLOAD_TIMEOUT_MS, "Media download")
                                ];
                            case 4:
                                buffer = _state.sent();
                                fileExtension = GetMediaTypeFromBuffer(buffer);
                                fileName = "".concat(Date.now(), ".").concat(fileExtension);
                                filePath = join(process.cwd(), fileName);
                                writeFileSync(filePath, buffer);
                                memeCaption = undefined;
                                if (!memeHint.length) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    promiseWithTimeout(PrepareMemeMedia({
                                        filePath: filePath,
                                        fileExtension: fileExtension,
                                        memeHint: memeHint,
                                        logger: _this.client.logger
                                    }), STICKER_TIMEOUT_MS, "Meme caption")
                                ];
                            case 5:
                                memeResult = _state.sent();
                                filePath = memeResult.filePath;
                                memeCaption = memeResult.caption;
                                _state.label = 6;
                            case 6:
                                quality = 100 - buffer.length / 2 * 100 / 1000000;
                                stickerOptions = {
                                    crop: false,
                                    metadata: {
                                        publisher: BOT_NAME,
                                        packname: STICKER_PACK_NAME
                                    }
                                };
                                return [
                                    4,
                                    promiseWithTimeout(createSticker([
                                        filePath
                                    ], _object_spread({
                                        quality: quality
                                    }, stickerOptions)), STICKER_TIMEOUT_MS, "Sticker conversion")
                                ];
                            case 7:
                                stickerBuffer = _state.sent();
                                _state.label = 8;
                            case 8:
                                if (!(stickerBuffer.length >= 1000000)) return [
                                    3,
                                    10
                                ];
                                if (!(quality > 10)) {
                                    throw new Error("Sticker file is too large to send on WhatsApp.");
                                }
                                quality -= 10;
                                return [
                                    4,
                                    promiseWithTimeout(createSticker([
                                        filePath
                                    ], _object_spread({
                                        quality: quality
                                    }, stickerOptions)), STICKER_TIMEOUT_MS, "Sticker conversion")
                                ];
                            case 9:
                                stickerBuffer = _state.sent();
                                return [
                                    3,
                                    8
                                ];
                            case 10:
                                sticker = {
                                    sticker: stickerBuffer
                                };
                                unlinkSync(filePath);
                                filePath = undefined;
                                return [
                                    4,
                                    _this.client.safeSend(Jid, sticker, {
                                        quoted: from
                                    })
                                ];
                            case 11:
                                _state.sent();
                                if (!(memeCaption === null || memeCaption === void 0 ? void 0 : memeCaption.top)) return [
                                    3,
                                    12
                                ];
                                return [
                                    4,
                                    _this.client.safeSend(Jid, {
                                        text: memeCaption.bottom ? "_".concat(memeCaption.top, "_\n_").concat(memeCaption.bottom, "_") : "_".concat(memeCaption.top, "_")
                                    }, {
                                        quoted: from
                                    })
                                ];
                            case 12:
                                _state.sent();
                                return [
                                    2
                                ];
                            case 14:
                                err = _state.sent();
                                _this.client.logger.error(err);
                                if (filePath) {
                                    try {
                                        unlinkSync(filePath);
                                    } catch (e) {}
                                }
                                return [
                                    4,
                                    _this.client.safeSend(Jid, {
                                        text: stickerFailureMessage(err)
                                    }, {
                                        quoted: from
                                    })
                                ];
                            case 15:
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
    return StickerCommand;
}(Command);
export { StickerCommand as default };
StickerCommand = _ts_decorate([
    ApplyMetadata({
        name: "sticker",
        aliases: [
            "stiker"
        ],
        description: "Convert image or video to sticker. Add a phrase for a title (images use AI).",
        usage: "{PREFIX}sticker [title phrase] — attach media or reply to image/video"
    })
], StickerCommand);
