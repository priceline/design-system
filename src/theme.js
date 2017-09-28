import { tint } from './color'

const createMediaQuery = n => `@media screen and (min-width:${n}em)`

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get () {
        return this[i]
      }
    })
  )

export const breakpoints = [
  32,
  40,
  48,
  64
]

export const mediaQueries = breakpoints.map(createMediaQuery)

const aliases = [
  'sm',
  'md',
  'lg',
  'xl'
]

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

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

export const regular = 400
export const bold = 700

// color palette
const black = '#000'
const white = '#fff'
const text = '#001833'
const blue = '#007aff' // primary
const lightBlue = '#cdf'
const darkBlue = '#049'
const gray = '#687B8E' // primary
const lightGray = '#f0f2f4'
const darkGray = '#364049'
const green = '#0a0' // secondary
const lightGreen = '#cec'
const darkGreen = '#060'
const red = '#c00' // secondary
const lightRed = '#fcc'
const darkRed = '#800'
const orange = '#f90' // secondary
const lightOrange = '#fec'
const darkOrange = '#950'
const purple = '#70b' // secondary
const lightPurple = '#ecf'
const darkPurple = '#407'

// tints
const flatten = (name, colors) => colors
  .reduce((a, b, i) => {
    const color = {
      [name + i]: b
    }
    return {...a, ...color}
  }, {})

const tints = [
  0.2,
  0.4,
  0.6,
  0.8
]
const blues = [lightBlue, blue, darkBlue]
const grays = [lightGray, gray, darkGray]
const greens = [lightGreen, green, darkGreen]
const reds = [lightRed, red, darkRed]
const oranges = [lightOrange, orange, darkOrange]
const purples = [lightPurple, purple, darkPurple]

export const colors = {
  black,
  white,
  text,
  blue,
  lightBlue,
  darkBlue,
  gray,
  lightGray,
  darkGray,
  green,
  lightGreen,
  darkGreen,
  red,
  lightRed,
  darkRed,
  orange,
  lightOrange,
  darkOrange,
  purple,
  lightPurple,
  darkPurple,
  blues,
  greens,
  reds,
  oranges,
  purples,
  ...flatten('blue', blues),
  ...flatten('gray', grays),
  ...flatten('green', greens),
  ...flatten('red', reds),
  ...flatten('orange', oranges),
  ...flatten('purple', purples)
}

export const radius = '2px'

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  fontSizes,
  regular,
  bold,
  colors,
  radius
}

export default theme
