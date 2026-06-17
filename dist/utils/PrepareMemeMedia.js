import ApplyMemeCaption from "#bajigur/utils/ApplyMemeCaption.js";
import GenerateMemeCaption from "#bajigur/utils/GenerateMemeCaption.js";
import { unlinkSync } from "node:fs";
var VIDEO_EXTENSIONS = new Set([
    "mp4",
    "mov",
    "webm",
    "gif"
]);
function normalizeTitle(text) {
    return String(text || "").trim().replace(/\s+/g, " ").slice(0, 80);
}
function isVideoExtension(fileExtension) {
    return VIDEO_EXTENSIONS.has(String(fileExtension || "").toLowerCase());
}
export default function PrepareMemeMedia(param) {
    return _PrepareMemeMedia.apply(this, arguments);
}
function _PrepareMemeMedia() {
    _PrepareMemeMedia = async function(param) {
        var filePath = param.filePath, fileExtension = param.fileExtension, memeHint = param.memeHint, logger = param.logger;
        var caption;
        if (isVideoExtension(fileExtension)) {
            caption = {
                top: normalizeTitle(memeHint),
                bottom: ""
            };
            if (!caption.top) {
                throw new Error("Title cannot be empty.");
            }
        } else {
            caption = await GenerateMemeCaption(memeHint, logger);
        }
        var memePath = await ApplyMemeCaption(filePath, caption, fileExtension);
        try {
            unlinkSync(filePath);
        } catch (e) {}
        return {
            filePath: memePath,
            caption: caption
        };
    };
    return _PrepareMemeMedia.apply(this, arguments);
}
