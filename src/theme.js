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
const lightBlue = '#cdf'
const blue = '#007aff' // primary
const darkBlue = '#049'
const lightGray = '#f0f2f4'
const borderGray = '#abb7c2'
const gray = '#687B8E' // primary
const darkGray = '#364049'
const lightGreen = '#cec'
const green = '#0a0' // secondary
const darkGreen = '#060'
const lightRed = '#fcc'
const red = '#c00' // secondary
const darkRed = '#800'
const lightOrange = '#fec'
const orange = '#f90' // secondary
const darkOrange = '#950'
const lightPurple = '#ecf'
const purple = '#70b' // secondary
const darkPurple = '#407'

// tints
const flatten = (name, colors) => colors
  .reduce((a, b, i) => {
    const color = {
      [name + i]: b
    }
    return {...a, ...color}
  }, {})

const blues = [lightBlue, lightBlue, blue, blue]
const grays = [lightGray, lightGray, gray, gray]
const greens = [lightGreen, lightGreen, green, green]
const reds = [lightRed, lightRed, red, red]
const oranges = [lightOrange, lightOrange, orange, orange]
const purples = [lightPurple, lightPurple, purple, purple]

export const colors = {
  black,
  white,
  text,
  blue,
  lightBlue,
  darkBlue,
  gray,
  lightGray,
  borderGray,
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
export const maxContainerWidth = '1280px'

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  fontSizes,
  regular,
  bold,
  colors,
  radius,
  maxContainerWidth
}

export default theme
