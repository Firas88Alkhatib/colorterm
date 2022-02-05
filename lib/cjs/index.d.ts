import { IColorOptions } from './Types/ColorOptions';
export declare const Color: (value: string, color: string | number[], options?: IColorOptions | undefined) => string;
export declare const Prepare: (color: string | number[], options?: IColorOptions | undefined) => (value: string) => string;
