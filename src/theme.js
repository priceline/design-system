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

export const breakpoints = [36, 48, 62, 75]

export const mediaQueries = breakpoints.map(createMediaQuery)

const aliases = ['sm', 'md', 'lg', 'xl']

/*
Small devices (landscape phones, 576px and up)
Medium devices (tablets, 768px and up)
Large devices (desktops, 992px and up)
Extra large devices (large desktops, 1200px and up)
*/

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const space = [0, 4, 8, 16, 32, 64, 128]

export const font = `'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif`

export const headingFont = 'halyard-display'

export const fontSizes = [12, 14, 16, 20, 24, 32, 48]

export const regular = 400
export const medium = 500
export const bold = 600

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  regular,
  medium,
  bold
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.025em'
}

// warm color palette
const yellow = '#F1C40F'
const lightOrange = '#F39C12'
const orange = '#E67E22'
const darkOrange = '#D35400'
const darkPink = '#E74C3C'
const crimsonRed = '#C0392B'
const darkPurple = '#641F71'
const purple = '#8B2D9C'

// cool color palette
const darkBlue = '#022D41'
const blueGray = '#34495E'
const blue = '#1379C1'
const lightBlue = '#4F9FD5'
const blueGreen = '#16A085'
const mintGreen = '#1ABC9C'
const brightGreen = '#2ECC71'
const darkGreen = '#27AE60'

// priceline legacy colors
const black = '#000'
const white = '#fff'
const text = '#001833'
const lightGray = '#f6f8fa'
const borderGray = '#d1d6db'
const gray = '#687B8E' // primary
const darkGray = '#364049'
const lightGreen = '#cec'
const green = '#0a0' // secondary
const lightRed = '#fcc'
const red = '#c00' // secondary
const darkRed = '#800'
const lightPurple = '#ecf'

const primary = purple

// tints
const flatten = (name, colors) =>
  colors.reduce((a, b, i) => {
    const color = {
      [name + i]: b
    }
    return { ...a, ...color }
  }, {})

const warmColors = [yellow, lightOrange, orange, darkOrange, darkPink, crimsonRed, darkPurple, purple]

const blues = [lightBlue, lightBlue, blue, blue]
const grays = [lightGray, lightGray, gray, gray]
const greens = [lightGreen, lightGreen, green, green]
const reds = [lightRed, lightRed, red, red]
const oranges = [lightOrange, lightOrange, orange, orange]
const purples = [lightPurple, lightPurple, purple, purple]

const colors = {
  yellow,
  lightOrange,
  orange,
  darkOrange,
  darkPink,
  crimsonRed,
  darkPurple,
  purple,
  darkBlue,
  blueGray,
  blue,
  lightBlue,
  blueGreen,
  mintGreen,
  brightGreen,
  darkGreen,
  black,
  white,
  text,
  gray,
  lightGray,
  borderGray,
  darkGray,
  green,
  lightGreen,
  red,
  lightRed,
  darkRed,
  lightPurple,
  primary,
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

export { colors }

// styled-system's `borderRadius` function can hook into the `radii` object/array
export const radii = [0, 2, 6]
export const radius = '2px'

export const maxContainerWidth = '1280px'

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
]

// animation duration
export const duration = {
  fast: `150ms`,
  normal: `300ms`,
  slow: `450ms`,
  slowest: `600ms`
}

// animation easing curves
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)'
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)'
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)'

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn
}

// animation delay
const transitionDelays = {
  small: `60ms`,
  medium: `160ms`,
  large: `260ms`,
  xLarge: `360ms`
}

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  headingFont,
  fontSizes,
  fontWeights,
  letterSpacings,
  regular,
  medium,
  bold,
  colors,
  radii,
  radius,
  boxShadows,
  maxContainerWidth,
  duration,
  timingFunctions,
  transitionDelays
}

export default theme
