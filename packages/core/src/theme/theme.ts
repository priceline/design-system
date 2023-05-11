/* eslint-disable @typescript-eslint/naming-convention */

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

export const space = [0, 4, 8, 16, 32, 64, 128].map((n) => n + 'px')

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

export const typography = {
  title1: {
    fontWeight: 700,
    fontSize: '80px',
    lineHeight: '96px',
  },
  title2: {
    fontWeight: 700,
    fontSize: '64px',
    lineHeight: '80px',
  },
  title3: {
    fontWeight: 700,
    fontSize: '52px',
    lineHeight: '64px',
  },
  heading1: {
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '48px',
  },
  heading2: {
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '40px',
  },
  heading3: {
    fontWeight: 700,
    fontSize: '26px',
    lineHeight: '32px',
  },
  heading4: {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '24px',
  },
  heading5: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px',
  },
  heading6: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '16px',
  },
  article: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '28px',
    letterSpacing: '-0.006rem',
  },
  paragraph: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '-0.003rem',
  },
  caption: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.006rem',
  },
  overline: {
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.063rem',
  },
  disclaimer: {
    fontWeight: 500,
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: '0.013rem',
  },
  highlight: {
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '12px',
    letterSpacing: '0.013rem',
    textTransform: 'uppercase',
    caps: true,
  },
  highlightBold: {
    fontWeight: 700,
    fontSize: '10px',
    lineHeight: '12px',
    letterSpacing: '0.013rem',
    textTransform: 'uppercase',
    caps: true,
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: '52px',
    lineHeight: '64px',
  },
  subheading1: {
    fontWeight: 500,
    fontSize: '40px',
    lineHeight: '48px',
  },
  subheading2: {
    fontWeight: 500,
    fontSize: '32px',
    lineHeight: '40px',
  },
  subheading3: {
    fontWeight: 500,
    fontSize: '26px',
    lineHeight: '32px',
  },
  subheading4: {
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '24px',
  },
  subheading5: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
  },
  subheading6: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
  },
  articleBold: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '28px',
    letterSpacing: '-0.006rem',
  },
  paragraphBold: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '-0.003rem',
  },
  paragraph2: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.004rem',
  },
  paragraph2Bold: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.004rem',
  },
  captionBold: {
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.006rem',
  },
  overlineMedium: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.063rem',
  },
  disclaimerBold: {
    fontWeight: 700,
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: '0.013rem',
  },
  label: {
    fontWeight: 700,
    fontSize: '10px',
    lineHeight: 1.4,
    letterSpacing: '0.2px',
  },
}

// styled-system's `borderRadius` function can hook into the `radii` object/array
export const radii = [0, 2, 6]
export const radius = '2px'

export const baseBorderRadii = {
  none: 'none',
  xsm: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  '3xl': '32px',
  full: '9999px',
}

export const actionBorderRadii = {
  'action-sm': '9999px',
  'action-md': '9999px',
  'action-lg': '12px',
  'action-xl': '12px',
}

export const borderRadii = {
  ...baseBorderRadii,
  ...actionBorderRadii,
}

export const maxContainerWidth = '1280px'

export const shadows = {
  sm:
    '0 -1px 0 0 rgba(0,0,0,0.03),0 0 1px 0 rgba(0,0,0,0.24),0 2px 1px -1px rgba(0,0,0,0.16),0 2px 4px 0 rgba(0,0,0,0.12)',
  md:
    '0 -1px 0 0 rgba(0,0,0,0.03),0 0 2px 0 rgba(0,0,0,0.2),0 4px 2px -2px rgba(0,0,0,0.12),0 4px 8px -1px rgba(0,0,0,0.16)',
  lg:
    '0 -1px 0 0 rgba(0,0,0,0.03),0 1px 4px 0 rgba(0,0,0,0.2),0 6px 4px -4px rgba(0,0,0,0.12),0 8px 16px -1px rgba(0,0,0,0.16)',
  xl:
    '0 -1px 0 0 rgba(0,0,0,0.03),0 2px 8px 0 rgba(0,0,0,0.16),0 10px 8px -5px rgba(0,0,0,0.16),0 12px 32px -2px rgba(0,0,0,0.16)',
  '2xl':
    '0 -1px 0 0 rgba(0,0,0,0.03),0 4px 12px 0 rgba(0,0,0,0.16),0 12px 12px -4px rgba(0,0,0,0.16),0 24px 64px -2px rgba(0,0,0,0.16)',
  'overlay-md':
    '0 -1px 0 0 rgba(0,0,0,0.03),0 4px 16px 0 rgba(0,0,0,0.2),0 4px 16px -4px rgba(0,0,0,0.2),0 12px 24px -2px rgba(0,0,0,0.2)',
  'overlay-lg':
    '0 -1px 0 0 rgba(0,0,0,0.03),0 8px 32px 0 rgba(0,0,0,0.24),0 8px 16px 0 rgba(0,0,0,0.2),0 24px 64px 0 rgba(0,0,0,0.2)',
  'overlay-xl':
    '0 -1px 0 0 rgba(0,0,0,0.03),0 24px 72px 0 rgba(0,0,0,0.48),0 8px 16px 0 rgba(0,0,0,0.12),0 24px 64px 0 rgba(0,0,0,0.2)',
}

export const textShadows = {
  sm: `0 1px 2px rgba(0,0,0,0.5)`,
  md: `0 2px 4px rgba(0,0,0,0.5)`,
}

// opacity
const opacity = {
  'opacity-0': 0.0,
  'opacity-10': 0.1,
  'opacity-20': 0.2,
  'opacity-30': 0.3,
  'opacity-40': 0.4,
  'opacity-50': 0.5,
  'opacity-60': 0.6,
  'opacity-70': 0.7,
  'opacity-80': 0.8,
  'opacity-90': 0.9,
  'opacity-100': 1.0,
}

// scale (min/half/max)
const scale = {
  'scale-0': 0.0,
  'scale-2': 0.02,
  'scale-6': 0.06,
  'scale-8': 0.08,
  'scale-10': 0.1,
  'scale-20': 0.2,
  'scale-30': 0.3,
  'scale-40': 0.4,
  'scale-50': 0.5,
  'scale-60': 0.6,
  'scale-70': 0.7,
  'scale-80': 0.8,
  'scale-90': 0.9,
  'scale-100': 1.0,
}

// animation duration
export const duration = {
  fast: `150ms`,
  normal: `300ms`,
  slow: `450ms`,
  slowest: `600ms`,
  'duration-100': `100ms`,
  'duration-200': `200ms`,
  'duration-250': `250ms`,
  'duration-300': `300ms`,
  'duration-450': `450ms`,
}

// animation easing curves
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)'
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)'
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)'
const standardProductive = 'cubic-bezier(0.2, 0, 0.38, 0.9)'
const entranceProductive = 'cubic-bezier(0, 0, 0.38, 0.9)'
const exitProductive = 'cubic-bezier(0.2, 0, 1, 0.9)'
const standardExpressive = 'cubic-bezier(0.4, 0.14, 0.3, 1)'
const entranceExpressive = 'cubic-bezier(0, 0, 0.3, 1)'
const exitExpressive = 'cubic-bezier(0.4, 0.14, 1, 1)'

export const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn,
  'standard-productive': standardProductive,
  'entrance-productive': entranceProductive,
  'exit-productive': exitProductive,
  'standard-expressive': standardExpressive,
  'entrance-expressive': entranceExpressive,
  'exit-expressive': exitExpressive,
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
  typography,
  colors,
  colorStyles,
  borderRadii,
  radii,
  radius,
  textShadows,
  shadows,
  maxContainerWidth,
  opacity,
  scale,
  duration,
  timingFunctions,
  transitionDelays,
}

export { theme }
