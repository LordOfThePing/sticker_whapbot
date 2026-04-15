/**
 * Shrink large strings and deep objects before they hit pino / pino-pretty (Baileys logs huge nodes).
 */
export function truncateForPino(val, maxStr, depth, maxDepth, seen) {
    if (depth > maxDepth) return "[max depth]";
    if (val === null || val === undefined) return val;
    var t = typeof val;
    if (t === "string") {
        if (val.length <= maxStr) return val;
        return "[string ".concat(val.length, " chars]");
    }
    if (t === "number" || t === "boolean") return val;
    if (t === "bigint") return val.toString();
    if (t !== "object") return String(val);
    if (val instanceof Error) {
        return {
            name: val.name,
            message: val.message,
            code: val.code
        };
    }
    if (seen.has(val)) return "[Circular]";
    seen.add(val);
    try {
        if (Array.isArray(val)) {
            var lim = Math.min(val.length, 24);
            var out = [];
            for(var i = 0; i < lim; i++){
                out.push(truncateForPino(val[i], maxStr, depth + 1, maxDepth, seen));
            }
            if (val.length > lim) {
                out.push("…+".concat(val.length - lim, " more"));
            }
            return out;
        }
        var o = {};
        var keys = Object.keys(val);
        var kl = Math.min(keys.length, 36);
        for(var j = 0; j < kl; j++){
            var k = keys[j];
            o[k] = truncateForPino(val[k], maxStr, depth + 1, maxDepth, seen);
        }
        if (keys.length > kl) {
            o._moreKeys = keys.length - kl;
        }
        return o;
    } finally{
        seen.delete(val);
    }
}
