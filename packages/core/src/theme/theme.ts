/* eslint-disable @typescript-eslint/naming-convention */

import { createTextStyles } from '../utils/createTextStyles'
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  space as _space,
  typography as _typography,
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
} from 'styled-system'
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

/**
 * @public
 */
export { colors }

/**
 * @public
 */
export const breakpoints = [32, 40, 48, 64, 80].map((n) => n + 'em')

/**
 * @public
 */
export const mediaQueries = createMediaQueries(breakpoints)

const aliases = ['sm', 'md', 'lg', 'xl', 'xxl']

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

/**
 * @public
 */
export const spaceValues = [0, 4, 8, 16, 32, 64, 128]
export const space = spaceValues.map((n) => n + 'px')

/**
 * @public
 */
export const font = `'Montserrat','Helvetica Neue',Helvetica,Arial,sans-serif`

/**
 * @public
 */
export const fontSizes = [12, 14, 16, 20, 24, 32, 40, 56, 72]

/**
 * @public
 */
export const medium = 500

/**
 * @public
 */
export const bold = 700

/**
 * @public
 */
export const regular = medium

/**
 * styled-system's `fontWeight` function can hook into the `fontWeights` object
 *
 * @public
 */
export const fontWeights = {
  medium,
  bold,
  // alias
  regular,
}

/**
 * @public
 */
export const lineHeights = {
  standard: 1.4,
  display: 1.25,
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.025em',
}

/**
 * @public
 */
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

/**
 * @public
 */
export type ZIndexStrings =
  | 'auto'
  | 'absolute'
  | 'dropdown'
  | 'sticky'
  | 'fixed'
  | 'overlay'
  | 'onOverlay'
  | 'offCanvas'
  | 'modal'
  | 'popover'
  | 'tooltip'

/**
 * @public
 */
export type ZIndex = number | ZIndexStrings

/**
 * @public
 */
export type ZIndices = Record<ZIndexStrings, string | number>

/**
 * @public
 */
export const zIndices: ZIndices = {
  auto: 'auto',
  absolute: 50,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  tooltip: 400,
  offCanvas: 500,
  overlay: 550,
  onOverlay: 600,
  popover: 700,
  modal: 800,
}

/**
 * styled-system's `borderRadius` function can hook into the `radii` object/array
 * @public
 */
export const radii = [0, 2, 6]

/**
 * @public
 */
export const radius = '2px'

/**
 * @public
 */
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

/**
 * @public
 */
export const actionBorderRadii = {
  'action-sm': '9999px',
  'action-md': '9999px',
  'action-lg': '12px',
  'action-xl': '12px',
}

/**
 * @public
 */
export const borderRadii = {
  ...baseBorderRadii,
  ...actionBorderRadii,
}

/**
 * @public
 */
export type BorderRadius = keyof typeof borderRadii

/**
 * @public
 */
export const maxContainerWidth = '1280px'

/**
 * @public
 */
export const shadows = {
  sm: '0 -1px 0 0 rgba(0,0,0,0.03),0 0 1px 0 rgba(0,0,0,0.24),0 2px 1px -1px rgba(0,0,0,0.16),0 2px 4px 0 rgba(0,0,0,0.12)',
  md: '0 -1px 0 0 rgba(0,0,0,0.03),0 0 2px 0 rgba(0,0,0,0.2),0 4px 2px -2px rgba(0,0,0,0.12),0 4px 8px -1px rgba(0,0,0,0.16)',
  lg: '0 -1px 0 0 rgba(0,0,0,0.03),0 1px 4px 0 rgba(0,0,0,0.2),0 6px 4px -4px rgba(0,0,0,0.12),0 8px 16px -1px rgba(0,0,0,0.16)',
  xl: '0 -1px 0 0 rgba(0,0,0,0.03),0 2px 8px 0 rgba(0,0,0,0.16),0 10px 8px -5px rgba(0,0,0,0.16),0 12px 32px -2px rgba(0,0,0,0.16)',
  '2xl':
    '0 -1px 0 0 rgba(0,0,0,0.03),0 4px 12px 0 rgba(0,0,0,0.16),0 12px 12px -4px rgba(0,0,0,0.16),0 24px 64px -2px rgba(0,0,0,0.16)',
  'overlay-md':
    '0 -1px 0 0 rgba(0,0,0,0.03),0 4px 16px 0 rgba(0,0,0,0.2),0 4px 16px -4px rgba(0,0,0,0.2),0 12px 24px -2px rgba(0,0,0,0.2)',
  'overlay-lg':
    '0 -1px 0 0 rgba(0,0,0,0.03),0 8px 32px 0 rgba(0,0,0,0.24),0 8px 16px 0 rgba(0,0,0,0.2),0 24px 64px 0 rgba(0,0,0,0.2)',
  'overlay-xl':
    '0 -1px 0 0 rgba(0,0,0,0.03),0 24px 72px 0 rgba(0,0,0,0.48),0 8px 16px 0 rgba(0,0,0,0.12),0 24px 64px 0 rgba(0,0,0,0.2)',
}

/**
 * @public
 */
export type BoxShadowSize = keyof typeof shadows

/**
 * @public
 */
export const textShadows = {
  sm: `0 1px 2px rgba(0,0,0,0.5)`,
  md: `0 2px 4px rgba(0,0,0,0.5)`,
}

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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
export const textStyles = createTextStyles({
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
})

/**
 * @public
 */
export const colorStyles = createColorStyles({ colors })

/**
 * @public
 */
export const theme = {
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
  zIndices,
}

/**
 * @public
 */
export type TextStyle = {
  fontWeight: number
  fontSize: string
  lineHeight: string
}

/**
 * @public
 */
export const paletteFamilyVariations = [
  'lightest',
  'light',
  'tint',
  'base',
  'heading',
  'tone',
  'dark',
  'shade',
  'darkest',
] as const

/**
 * @public
 */
export type PaletteFamily = {
  lightest?: string
  light?: string
  tint?: string
  base: string
  heading?: string
  tone?: string
  dark?: string
  shade?: string
  darkest?: string
}

/**
 * @public
 */
export const paletteFamilyNames = [
  'primary',
  'secondary',
  'text',
  'highlight',
  'success',
  'error',
  'warning',
  'alert',
  'caution',
  'notify',
  'pricePrimary',
  'priceSecondary',
  'strike',
  'promoPrimary',
  'promoSecondary',
  'border',
  'background',
] as const

/**
 * @public
 */
export type PaletteFamilyVariation = (typeof paletteFamilyVariations)[number]

/**
 * @public
 */
export type PaletteFamilyName = (typeof paletteFamilyNames)[number]

/**
 * @public
 */
export type PaletteFamilies = Record<PaletteFamilyName, PaletteFamily>

/**
 * @public
 */
export type PaletteColor = `${PaletteFamilyName}.${PaletteFamilyVariation}`

export const paletteColors = paletteFamilyNames.flatMap((family) =>
  paletteFamilyVariations.map((variation) => `${family}.${variation}`)
)

/**
 * @public
 */
export type ColorStyle = {
  color: string
  backgroundColor: string
}

/**
 * @public
 */
export const colorStyleNames = [
  'whiteOnText',
  'whiteOnGray',
  'textOnLightGray',
  'whiteOnBlue',
  'blueOnLightBlue',
  'whiteOnGreen',
  'greenOnLightGreen',
  'whiteOnRed',
  'redOnLightRed',
  'textOnOrange',
  'whiteOnPurple',
  'purpleOnLightPurple',
  'textOnWhite',
  'grayOnWhite',
  'blueOnWhite',
  'greenOnWhite',
  'redOnWhite',
  'purpleOnWhite',
  'whiteOnDarkOrange',
  'info',
  'success',
  'warning',
  'danger',
] as const

/**
 * @public
 */
export type ColorStyleName = (typeof colorStyleNames)[number]

/**
 * @public
 */
export type ColorStyles = Record<ColorStyleName, ColorStyle>

/**
 * @public
 */
export type ColorScheme = {
  foreground: string
  background: string
  backgroundName: PaletteColor
}

/**
 * @public
 */
export const colorSchemeNames = [
  'primary',
  'primaryLight',
  'primaryLightest',
  'primaryDark',
  'primaryShade',
  'primaryDarkOnLight',
  'secondary',
  'secondaryLight',
  'secondaryLightest',
  'secondaryDark',
  'secondaryDarkOnLight',
  'neutral',
  'neutralLight',
  'neutralLightest',
  'neutralDark',
  'neutralDarkOnLight',
  'neutralDarkOnLightest',
  'success',
  'successLight',
  'successLightest',
  'successDark',
  'successDarkOnLight',
  'warning',
  'warningLight',
  'warningLightest',
  'cautionLight',
  'highlightLight',
  'promo',
  'promoLight',
  'promoLightest',
  'promoDark',
  'promoDarkOnLight',
  'alert',
  'alertLight',
  'alertLightest',
  'alertDarkOnLight',
  'heading',
  'headingBase',
  'headingLight',
  'headingOnPrimaryLight',
  'promoSecondary',
  'promoSecondaryDark',
] as const

/**
 * @public
 */
export type ColorSchemeName = (typeof colorSchemeNames)[number]

/**
 * @public
 */
export type ColorSchemes = Record<ColorSchemeName, ColorScheme>

/**
 * @public
 */
export type ColorName = keyof typeof colors

/**
 * @public
 */
export type ColorProp = ColorName | PaletteFamilyName | PaletteColor

/**
 * @public
 */
export type DesignSystemTheme = {
  space: string[]
  colors: Record<string, string>
  componentStyles: Record<string, Record<string, Record<string, Record<string, unknown>>>>
  mediaQueries: string[]
  breakpoints: string[]
  palette: PaletteFamilies
  colorStyles: ColorStyles
  textStyles: TextStyle[]
  contrastRatio: number
  colorSchemes: ColorSchemes
  zIndices: ZIndices
}

/**
 * @public
 */
export interface IStyledSystemProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {
  style?: React.CSSProperties
}

/**
 * @public
 */
export const ComposedStyleFns = compose(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  _space,
  _typography
)
