import { MAX_CONCURRENT_REQUESTS, MAX_WAITLIST_SIZE } from "#bajigur/config.js";
var ThrottleQueue = /*#__PURE__*/ function() {
    "use strict";
    function ThrottleQueue(options) {
        if (options === void 0) options = {};
        this.concurrency = Math.max(1, options.concurrency || MAX_CONCURRENT_REQUESTS);
        this.maxQueueSize = Math.max(1, options.maxQueueSize || MAX_WAITLIST_SIZE);
        this.running = 0;
        this.queue = [];
    }
    var _proto = ThrottleQueue.prototype;
    _proto.getQueueSize = function getQueueSize() {
        return this.queue.length;
    };
    _proto.enqueue = function enqueue(task) {
        if (this.running >= this.concurrency && this.queue.length >= this.maxQueueSize) {
            return false;
        }
        this.queue.push(task);
        this.pump();
        return true;
    };
    _proto.pump = function pump() {
        var _this = this;
        while(this.running < this.concurrency && this.queue.length){
            var task = this.queue.shift();
            this.running += 1;
            Promise.resolve().then(function() {
                return task();
            }).catch(function() {
                return undefined;
            }).finally(function() {
                _this.running -= 1;
                _this.pump();
            });
        }
    };
    return ThrottleQueue;
}();
export { ThrottleQueue as default };
