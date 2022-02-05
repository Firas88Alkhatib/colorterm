import { getRgb } from './utilities.js';
const ansiCode = (value) => {
    return `\x1B[${value}m`;
};
export const reset = ansiCode(0);
export const styles = {
    bold: ansiCode(1),
    faint: ansiCode(2),
    italic: ansiCode(3),
    underlined: ansiCode(4),
    inverse: ansiCode(7),
    strikeThrough: ansiCode(9),
};
export const rgbColorCode = (color) => {
    const [r, g, b] = getRgb(color);
    return ansiCode(`38;2;${r};${g};${b}`);
};
export const rgbBackColorCode = (color) => {
    const [r, g, b] = getRgb(color);
    return ansiCode(`48;2;${r};${g};${b}`);
};
export const getStyles = (options = {}) => {
    return Object.entries(options)
        .map(([key, value]) => {
        return value === true
            ? styles[key]
            : key === 'background' && value
                ? rgbBackColorCode(value)
                : '';
        // return key === 'background' ? rgbBackColorCode(value as (number | string)[] | string) : value === true ? styles[key] : ''
    })
        .join('');
};
