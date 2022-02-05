"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prepare = exports.Color = void 0;
const ansiCodes_js_1 = require("./ansiCodes.js");
const Color = (value, color, options) => {
    const results = (0, ansiCodes_js_1.getStyles)(options) + (0, ansiCodes_js_1.rgbColorCode)(color) + value + ansiCodes_js_1.reset;
    return results;
};
exports.Color = Color;
const Prepare = (color, options) => {
    return (value) => {
        return (0, exports.Color)(value, color, options);
    };
};
exports.Prepare = Prepare;
