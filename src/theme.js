const createMediaQuery = n => `@media screen and (min-width:${n}em)`

export const breakpoints = [
  32,
  40,
  48,
  64
]

export const mediaQueries = breakpoints.map(createMediaQuery)

export const space = [
  0,
  4,
  8,
  16,
  32,
  64,
  128
]

export const font = `'Helvetica Neue',Helvetica,Arial,sans-serif`

export const fontSizes = [
  12,
  14,
  16,
  20,
  24,
  32,
  48
]

export const fontWeights = [
  400,
  700
]

export const regular = fontWeights[0]
export const bold = fontWeights[1]

export const colors = {
  black: '#000',
  white: '#fff',
  blue: '#0a84c1'
}

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  fontSizes,
  fontWeights,
  regular,
  bold,
  colors,
}

export default theme
