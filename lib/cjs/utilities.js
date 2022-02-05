"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRgb = exports.hexToRgb = void 0;
const hexToRgb = (hexValue) => {
    var _a;
    const noHash = hexValue.substring(1);
    if (noHash.length === 3) {
        return noHash.split('').map((value) => parseInt(`${value}${value}`, 16));
    }
    else {
        return (_a = noHash.match(/.{1,2}/g)) === null || _a === void 0 ? void 0 : _a.map((value) => parseInt(value, 16));
    }
};
exports.hexToRgb = hexToRgb;
const getRgb = (rgbColor) => {
    return Array.isArray(rgbColor) ? rgbColor : (0, exports.hexToRgb)(rgbColor);
};
exports.getRgb = getRgb;
