import { getStyles, reset, rgbColorCode } from './ansiCodes.js';
export const Color = (value, color, options) => {
    const results = getStyles(options) + rgbColorCode(color) + value + reset;
    return results;
};
export const Prepare = (color, options) => {
    return (value) => {
        return Color(value, color, options);
    };
};
