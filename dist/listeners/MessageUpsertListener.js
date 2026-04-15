function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
import ApplyMetadata from "#bajigur/decorators/ApplyMetadata.js";
import Listener from "#bajigur/structures/Listener.js";
import { BUSY_MESSAGE, PREFIX, TOO_BUSY_MESSAGE } from "#bajigur/config.js";
var MessageUpsertListener = /*#__PURE__*/ function(Listener) {
    "use strict";
    _inherits(MessageUpsertListener, Listener);
    var _super = _create_super(MessageUpsertListener);
    function MessageUpsertListener() {
        _class_call_check(this, MessageUpsertListener);
        return _super.apply(this, arguments);
    }
    _create_class(MessageUpsertListener, [
        {
            key: "run",
            value: function run(param) {
                var messages = param.messages;
                var _messageData_message_conversation, _messageData_message, _messageData_message_extendedTextMessage, _messageData_message1, _messageData_message_imageMessage, _messageData_message2, _messageData_message_videoMessage, _messageData_message3, _messageData_message_documentWithCaptionMessage_message_documentMessage, _messageData_message_documentWithCaptionMessage_message, _messageData_message_documentWithCaptionMessage, _messageData_message4, _messageData_message_groupInviteMessage, _messageData_message5, _messageData_message_liveLocationMessage, _messageData_message6;
                var messageData = messages[0];
                var _messageData_message_extendedTextMessage_text, _ref, _ref1, _ref2, _ref3;
                var findMessage = ((_messageData_message = messageData.message) === null || _messageData_message === void 0 ? void 0 : (_messageData_message_conversation = _messageData_message.conversation) === null || _messageData_message_conversation === void 0 ? void 0 : _messageData_message_conversation.length) ? messageData.message.conversation : (_ref3 = (_ref2 = (_ref1 = (_ref = (_messageData_message_extendedTextMessage_text = (_messageData_message1 = messageData.message) === null || _messageData_message1 === void 0 ? void 0 : (_messageData_message_extendedTextMessage = _messageData_message1.extendedTextMessage) === null || _messageData_message_extendedTextMessage === void 0 ? void 0 : _messageData_message_extendedTextMessage.text) !== null && _messageData_message_extendedTextMessage_text !== void 0 ? _messageData_message_extendedTextMessage_text : (_messageData_message2 = messageData.message) === null || _messageData_message2 === void 0 ? void 0 : (_messageData_message_imageMessage = _messageData_message2.imageMessage) === null || _messageData_message_imageMessage === void 0 ? void 0 : _messageData_message_imageMessage.caption) !== null && _ref !== void 0 ? _ref : (_messageData_message3 = messageData.message) === null || _messageData_message3 === void 0 ? void 0 : (_messageData_message_videoMessage = _messageData_message3.videoMessage) === null || _messageData_message_videoMessage === void 0 ? void 0 : _messageData_message_videoMessage.caption) !== null && _ref1 !== void 0 ? _ref1 : (_messageData_message4 = messageData.message) === null || _messageData_message4 === void 0 ? void 0 : (_messageData_message_documentWithCaptionMessage = _messageData_message4.documentWithCaptionMessage) === null || _messageData_message_documentWithCaptionMessage === void 0 ? void 0 : (_messageData_message_documentWithCaptionMessage_message = _messageData_message_documentWithCaptionMessage.message) === null || _messageData_message_documentWithCaptionMessage_message === void 0 ? void 0 : (_messageData_message_documentWithCaptionMessage_message_documentMessage = _messageData_message_documentWithCaptionMessage_message.documentMessage) === null || _messageData_message_documentWithCaptionMessage_message_documentMessage === void 0 ? void 0 : _messageData_message_documentWithCaptionMessage_message_documentMessage.caption) !== null && _ref2 !== void 0 ? _ref2 : (_messageData_message5 = messageData.message) === null || _messageData_message5 === void 0 ? void 0 : (_messageData_message_groupInviteMessage = _messageData_message5.groupInviteMessage) === null || _messageData_message_groupInviteMessage === void 0 ? void 0 : _messageData_message_groupInviteMessage.caption) !== null && _ref3 !== void 0 ? _ref3 : (_messageData_message6 = messageData.message) === null || _messageData_message6 === void 0 ? void 0 : (_messageData_message_liveLocationMessage = _messageData_message6.liveLocationMessage) === null || _messageData_message_liveLocationMessage === void 0 ? void 0 : _messageData_message_liveLocationMessage.caption;
                var remoteJid = messageData.key.remoteJid || "";
                var participant = messageData.key.participant || remoteJid;
                var senderId = (participant || "").split("@")[0];
                var isPrivateChat = remoteJid.endsWith("@s.whatsapp.net");
                var wasKnown = this.client.safetyPolicy.isKnownContact(remoteJid);
                this.client.safetyPolicy.markKnown(participant);
                if (isPrivateChat && !wasKnown) {
                    this.client.logger.info("Ignored command from unknown contact ".concat(remoteJid, " (now added to known list)."));
                    return;
                }
                if (!(findMessage === null || findMessage === void 0 ? void 0 : findMessage.startsWith(PREFIX)) || !this.client.commands.isReady) return;
                var evaluate = this.client.safetyPolicy.evaluateInbound(remoteJid, senderId, findMessage.toLowerCase());
                if (!evaluate.allow) return;
                var queue = this.client.throttleQueue;
                var queueUsage = queue.getQueueSize() / queue.maxQueueSize;
                if (queueUsage >= 0.85 && this.client.safetyPolicy.shouldNotify("busy:".concat(remoteJid), 7000)) {
                    this.client.safeSend(remoteJid, {
                        text: BUSY_MESSAGE
                    }, {
                        quoted: messageData
                    });
                }
                var accepted = queue.enqueue(this.client.commands.handle.bind(this.client.commands, findMessage, messageData));
                if (accepted) return;
                if (this.client.safetyPolicy.shouldNotify("toobusy:".concat(remoteJid), 10000)) {
                    this.client.safeSend(remoteJid, {
                        text: TOO_BUSY_MESSAGE
                    }, {
                        quoted: messageData
                    });
                }
            }
        }
    ]);
    return MessageUpsertListener;
}(Listener);
export { MessageUpsertListener as default };
MessageUpsertListener = _ts_decorate([
    ApplyMetadata({
        name: "messages.upsert"
    })
], MessageUpsertListener);
