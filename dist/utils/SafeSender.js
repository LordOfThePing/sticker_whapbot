import { ALLOW_EXISTING_CHATS_ONLY, MAX_SAFE_SEND_DELAY_MS, MIN_SAFE_SEND_DELAY_MS } from "#bajigur/config.js";
var wait = function(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
};
var jitter = function(min, max) {
    if (max <= min) return min;
    return Math.floor(min + Math.random() * (max - min + 1));
};
var SafeSender = /*#__PURE__*/ function() {
    "use strict";
    function SafeSender(client, policy) {
        this.client = client;
        this.policy = policy;
        this.chain = Promise.resolve();
    }
    var _proto = SafeSender.prototype;
    _proto.send = function send(jid, content, options) {
        var _this = this;
        var run = function() {
            var _this_client_socket;
            return Promise.resolve().then(function() {
                if (ALLOW_EXISTING_CHATS_ONLY && !_this.policy.isKnownContact(jid)) {
                    return undefined;
                }
                return wait(jitter(MIN_SAFE_SEND_DELAY_MS, MAX_SAFE_SEND_DELAY_MS));
            }).then(function() {
                return (_this_client_socket = _this.client.socket) === null || _this_client_socket === void 0 ? void 0 : _this_client_socket.sendMessage(jid, content, options);
            }).catch(function(err) {
                _this.client.logger.warn("safeSend failed: ".concat(err instanceof Error ? err.message : "unknown error"));
                return undefined;
            });
        };
        this.chain = this.chain.then(run, run);
        return this.chain;
    };
    return SafeSender;
}();
export { SafeSender as default };
