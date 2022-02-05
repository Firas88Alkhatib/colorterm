import { getStyles, reset, rgbColorCode } from './ansiCodes.js'
import { IColorOptions } from './Types/ColorOptions'

export const Color = (value: string, color: string | number[], options?: IColorOptions) => {
  const results = getStyles(options) + rgbColorCode(color) + value + reset
  return results
}

export const Prepare = (color: string | number[], options?: IColorOptions) => {
  return (value: string) => {
    return Color(value, color, options)
  }
}
