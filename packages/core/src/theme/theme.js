import { createTextStyles } from '../utils/createTextStyles'
import { createColorStyles } from '../utils/createColorStyles'
import { createMediaQueries } from '../utils/createMediaQueries'
import { colors } from './colors'

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      },
    })
  )

export { colors }
export const breakpoints = [32, 40, 48, 64, 80].map((n) => n + 'em')

export const mediaQueries = createMediaQueries(breakpoints)

const aliases = ['sm', 'md', 'lg', 'xl', 'xxl']

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const space = [0, 4, 8, 16, 32, 64, 128]

export const font = `'Montserrat','Helvetica Neue',Helvetica,Arial,sans-serif`

export const fontSizes = [12, 14, 16, 20, 24, 32, 40, 56, 72]

export const medium = 500
export const bold = 700
// alias
export const regular = medium

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  medium,
  bold,
  // alias
  regular,
}

export const lineHeights = {
  standard: 1.4,
  display: 1.25,
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.025em',
}

// styled-system's `borderRadius` function can hook into the `radii` object/array
export const radii = [0, 2, 6]
export const radius = '2px'

export const borderRadii = {
  none: 'none',
  xsm: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  '3xl': '32px',
  full: '9999px',
  'action-sm': '9999px',
  'action-md': '9999px',
  'action-lg': '12px',
}

export const maxContainerWidth = '1280px'

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`,
]

export const textShadows = {
  sm: `0 1px 2px rgba(0,0,0,0.5)`,
  md: `0 2px 4px rgba(0,0,0,0.5)`,
}

// animation duration
export const duration = {
  fast: `150ms`,
  normal: `300ms`,
  slow: `450ms`,
  slowest: `600ms`,
}

// animation easing curves
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)'
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)'
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)'

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn,
}

// animation delay
const transitionDelays = {
  small: `60ms`,
  medium: `160ms`,
  large: `260ms`,
  xLarge: `360ms`,
}

export const textStyles = createTextStyles({
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
})
export const colorStyles = createColorStyles({ colors })

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  regular,
  bold,
  textStyles,
  colors,
  colorStyles,
  borderRadii,
  radii,
  radius,
  boxShadows,
  textShadows,
  maxContainerWidth,
  duration,
  timingFunctions,
  transitionDelays,
}

export { theme }
