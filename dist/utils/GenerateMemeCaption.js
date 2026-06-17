import { MEME_CAPTION_ENABLED, OPENAI_API_KEY, OPENAI_MODEL } from "#bajigur/config.js";
function normalizeCaption(text) {
    return String(text || "").trim().replace(/\s+/g, " ").slice(0, 80);
}
function parseCaptionJson(raw) {
    try {
        var parsed = JSON.parse(raw);
        var top = normalizeCaption(parsed.top || parsed.title || parsed.setup || "");
        var bottom = normalizeCaption(parsed.bottom || parsed.punchline || "");
        if (!top && bottom) {
            top = bottom;
            bottom = "";
        }
        if (!top) return null;
        return {
            top: top,
            bottom: bottom
        };
    } catch (e) {
        return null;
    }
}
export default function GenerateMemeCaption(hint, logger) {
    return _GenerateMemeCaption.apply(this, arguments);
}
function _GenerateMemeCaption() {
    _GenerateMemeCaption = async function(hint, logger) {
        var cleaned = normalizeCaption(hint);
        if (!cleaned) {
            throw new Error("Caption phrase cannot be empty.");
        }
        if (!MEME_CAPTION_ENABLED || !OPENAI_API_KEY.length) {
            return {
                top: cleaned,
                bottom: ""
            };
        }
        var controller = new AbortController();
        var timer = setTimeout(function() {
            return controller.abort();
        }, 20000);
        try {
            var response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    Authorization: "Bearer ".concat(OPENAI_API_KEY),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: OPENAI_MODEL,
                    temperature: 0.8,
                    response_format: {
                        type: "json_object"
                    },
                    messages: [
                        {
                            role: "system",
                            content: "You write short, witty captions for photos. Return JSON only: {\"top\":\"...\",\"bottom\":\"...\"}. Top is the main title (required). Bottom is an optional short subtitle. Use normal sentence case, not ALL CAPS. Each line max 8 words. Leave bottom empty if one line is enough."
                        },
                        {
                            role: "user",
                            content: cleaned
                        }
                    ]
                }),
                signal: controller.signal
            });
            if (!response.ok) {
                throw new Error("OpenAI request failed (".concat(response.status, ")"));
            }
            var data = await response.json();
            var _data_choices, _data_choices_, _data_choices__message;
            var content = (_data_choices = data.choices) === null || _data_choices === void 0 ? void 0 : (_data_choices_ = _data_choices[0]) === null || _data_choices_ === void 0 ? void 0 : (_data_choices__message = _data_choices_.message) === null || _data_choices__message === void 0 ? void 0 : _data_choices__message.content;
            var parsed = parseCaptionJson(content || "");
            if (parsed) return parsed;
            logger === null || logger === void 0 ? void 0 : logger.warn("OpenAI caption was not valid JSON; using user phrase.");
            return {
                top: cleaned,
                bottom: ""
            };
        } catch (err) {
            if (err && err.name === "AbortError") {
                logger === null || logger === void 0 ? void 0 : logger.warn("OpenAI caption timed out; using user phrase.");
            } else {
                logger === null || logger === void 0 ? void 0 : logger.warn(err instanceof Error ? err.message : "OpenAI caption failed");
            }
            return {
                top: cleaned,
                bottom: ""
            };
        } finally{
            clearTimeout(timer);
        }
    };
    return _GenerateMemeCaption.apply(this, arguments);
}
