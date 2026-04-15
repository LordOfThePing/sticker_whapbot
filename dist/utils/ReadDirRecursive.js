import { readdirSync, statSync } from "fs";
import { join } from "path";
export default function ReadDirRecursive(directory) {
    var results = [];
    function read(path) {
        var files = readdirSync(path);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var file = _step.value;
                var dir = join(path, file);
                if (statSync(dir).isDirectory()) {
                    read(dir);
                } else {
                    results.push(dir);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    read(directory);
    return results;
}
