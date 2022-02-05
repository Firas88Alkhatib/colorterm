"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyles = exports.rgbBackColorCode = exports.rgbColorCode = exports.styles = exports.reset = void 0;
const utilities_js_1 = require("./utilities.js");
const ansiCode = (value) => {
    return `\x1B[${value}m`;
};
exports.reset = ansiCode(0);
exports.styles = {
    bold: ansiCode(1),
    faint: ansiCode(2),
    italic: ansiCode(3),
    underlined: ansiCode(4),
    inverse: ansiCode(7),
    strikeThrough: ansiCode(9),
};
const rgbColorCode = (color) => {
    const [r, g, b] = (0, utilities_js_1.getRgb)(color);
    return ansiCode(`38;2;${r};${g};${b}`);
};
exports.rgbColorCode = rgbColorCode;
const rgbBackColorCode = (color) => {
    const [r, g, b] = (0, utilities_js_1.getRgb)(color);
    return ansiCode(`48;2;${r};${g};${b}`);
};
exports.rgbBackColorCode = rgbBackColorCode;
const getStyles = (options = {}) => {
    return Object.entries(options)
        .map(([key, value]) => {
        return value === true
            ? exports.styles[key]
            : key === 'background' && value
                ? (0, exports.rgbBackColorCode)(value)
                : '';
        // return key === 'background' ? rgbBackColorCode(value as (number | string)[] | string) : value === true ? styles[key] : ''
    })
        .join('');
};
exports.getStyles = getStyles;
