import { IColorOptions } from './Types/ColorOptions';
export declare const reset: string;
export declare const styles: {
    bold: string;
    faint: string;
    italic: string;
    underlined: string;
    inverse: string;
    strikeThrough: string;
};
export declare const rgbColorCode: (color: (string | number)[] | string) => string;
export declare const rgbBackColorCode: (color: (string | number)[] | string) => string;
export declare const getStyles: (options?: Partial<IColorOptions>) => string;
