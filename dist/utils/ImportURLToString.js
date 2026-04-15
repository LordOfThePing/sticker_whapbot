import { platform } from "node:os";
import { URL } from "node:url";
export default function ImportURLToString(url) {
    var pathArray = new URL(url).pathname.split(/\/|\\/g).filter(Boolean);
    var path = pathArray.slice(0, -1).join("/");
    return decodeURIComponent("".concat(platform() === "win32" ? "" : "/").concat(path));
}
