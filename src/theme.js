import { tint } from './color'
import legacyColors from './legacyColors'

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

export const font = `'Helvetica Neue', Helvetica, Arial, sans-serif`

export const fontSizes = [
  12,
  14,
  16,
  20,
  24,
  32,
  48
]

export const regular = 400
export const bold = 700

// next color palette
const black = '#000'
const white = '#fff'
const blue = '#007aff'
const green = '#0a0'
const red = '#c00'
const orange = '#f90'
const purple = '#7600bb'

// tints
const flatten = (name, colors) => colors
  .reduce((a, b, i) => Object.assign(a, {
    [name + i]: b
  }), {})

const tints = [
  0.2,
  0.4,
  0.6,
  0.8
]
// const grays
const blues = tints.map(tint(blue))
const greens = tints.map(tint(green))
const reds = tints.map(tint(red))
const oranges = tints.map(tint(orange))
const purples = tints.map(tint(purple))

export const colors = Object.assign({}, {
  black,
  white,
  blue,
  green,
  red,
  orange,
  purple,
  blues,
  greens,
  reds,
  oranges,
  purples
},
  flatten('blue', blues),
  flatten('green', greens),
  flatten('red', reds),
  flatten('orange', oranges),
  flatten('purple', purples),
)

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  fontSizes,
  regular,
  bold,
  colors,

  legacyColors
}

export { default as legacyColors } from './legacyColors'

export default theme
