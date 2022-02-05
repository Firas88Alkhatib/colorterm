export const hexToRgb = (hexValue: string) => {
  const noHash = hexValue.substring(1)
  if (noHash.length === 3) {
    return noHash.split('').map((value) => parseInt(`${value}${value}`, 16))
  } else {
    return noHash.match(/.{1,2}/g)?.map((value) => parseInt(value, 16))!
  }
}

export const getRgb = (rgbColor: (string | number)[] | string) => {
  return Array.isArray(rgbColor) ? rgbColor : hexToRgb(rgbColor)
}
