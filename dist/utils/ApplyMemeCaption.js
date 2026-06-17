import { MEME_FONT_PATH } from "#bajigur/config.js";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
var execFileAsync = promisify(execFile);
var VIDEO_EXTENSIONS = new Set([
    "mp4",
    "mov",
    "webm",
    "gif"
]);
function escapeDrawtext(text) {
    return String(text || "").replace(/\\/g, "\\\\").replace(/:/g, "\\:").replace(/'/g, "\u2019").replace(/%/g, "\\%").replace(/\n/g, " ");
}
function buildDrawtextFilters(caption, isVideo) {
    var font = MEME_FONT_PATH.replace(/\\/g, "/").replace(/:/g, "\\:");
    var filters = [];
    var textStyle = "fontfile='".concat(font, "':fontcolor=black:fontsize=h/22:box=1:boxcolor=white@0.82:boxborderw=10:x=(w-text_w)/2");
    if (caption.top) {
        filters.push("drawtext=".concat(textStyle, ":text='").concat(escapeDrawtext(caption.top), "':y=h*0.03"));
    }
    if (!isVideo && caption.bottom) {
        filters.push("drawtext=".concat(textStyle, ":text='").concat(escapeDrawtext(caption.bottom), "':y=h*0.90-text_h"));
    }
    if (!filters.length) {
        throw new Error("Caption is empty.");
    }
    return filters.join(",");
}
function outputPathFor(inputPath, fileExtension) {
    var base = inputPath.replace(/\.[^.]+$/, "");
    if (VIDEO_EXTENSIONS.has(fileExtension.toLowerCase())) {
        return "".concat(base, "-caption.mp4");
    }
    if (fileExtension.toLowerCase() === "png") {
        return "".concat(base, "-caption.png");
    }
    return "".concat(base, "-caption.jpg");
}
export default function ApplyMemeCaption(inputPath, caption, fileExtension) {
    return _ApplyMemeCaption.apply(this, arguments);
}
function _ApplyMemeCaption() {
    _ApplyMemeCaption = async function(inputPath, caption, fileExtension) {
        var isVideo = VIDEO_EXTENSIONS.has(fileExtension.toLowerCase());
        var vf = buildDrawtextFilters(caption, isVideo);
        var outputPath = outputPathFor(inputPath, fileExtension);
        var args = [
            "-y",
            "-i",
            inputPath,
            "-vf",
            vf
        ];
        if (isVideo) {
            args.push("-an", "-c:v", "libx264", "-crf", "18", "-preset", "fast", "-pix_fmt", "yuv420p", "-movflags", "+faststart", outputPath);
        } else if (fileExtension.toLowerCase() === "png") {
            args.push("-frames:v", "1", outputPath);
        } else {
            args.push("-frames:v", "1", "-q:v", "2", outputPath);
        }
        await execFileAsync("ffmpeg", args, {
            timeout: 120000,
            maxBuffer: 10 * 1024 * 1024
        });
        return outputPath;
    };
    return _ApplyMemeCaption.apply(this, arguments);
}
