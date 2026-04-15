import BajigurClient from "./structures/BajigurClient.js";
var client = new BajigurClient();
process.on("unhandledRejection", function(error) {
    var _error_stack;
    client.logger.error("Unhandled Rejection: ".concat((_error_stack = error.stack) !== null && _error_stack !== void 0 ? _error_stack : error.message));
});
process.on("uncaughtException", function(error) {
    var _error_stack;
    client.logger.error("Uncought Exception: ".concat((_error_stack = error.stack) !== null && _error_stack !== void 0 ? _error_stack : error.message));
    process.exit(1);
});
await client.connect();
