import deepmerge from 'deepmerge'
import { DefaultTheme } from 'styled-components'
import defaultTheme from '../theme/theme'
import createTextStyles from './createTextStyles'
import createColorStyles from './createColorStyles'

/**
 * Adds aliases to an array of keys
 *
 * @param {Array} arr The array to add aliases to
 */
const addAliases = (arr: string[]): string[] => {
  arr.forEach((val, key) => {
    arr[['sm', 'md', 'lg', 'xl', 'xxl'][key]] = val
  })

  return arr
}

/**
 * Create the palette based on passed in theme
 *
 * @param {Object=} palette The passed in palette
 * @param {Object}  theme   The passed in theme
 *
 * @returns {Object} The generated palette
 */
const createPalette = ({ palette = {}, ...theme }): Palette => {
  const {
    lightBlue,
    blue,
    darkBlue,
    lightGreen,
    green,
    darkGreen,
    white,
    text,
    lightRed,
    red,
    darkRed,
    lightOrange,
    orange,
    darkOrange,
    lightYellow,
    yellow,
    lightPurple,
    purple,
    pink,
    gray,
    borderGray,
    darkGray,
    lightGray,
    buttonGray,
  }: DefaultTheme['colors'] = theme.colors as DefaultTheme['colors']

  return deepmerge(
    {
      primary: {
        light: lightBlue,
        base: blue,
        dark: darkBlue,
      },
      secondary: {
        light: lightGreen,
        base: green,
        dark: darkGreen,
      },
      text: {
        lightest: white,
        light: gray,
        base: text,
        dark: '#001023',
      },
      success: {
        light: lightGreen,
        base: green,
        dark: darkGreen,
      },
      error: {
        light: lightRed,
        base: red,
        dark: darkRed,
      },
      warning: {
        light: lightRed,
        base: red,
        dark: darkRed,
      },
      alert: {
        light: lightOrange,
        base: orange,
        dark: darkOrange,
      },
      caution: {
        light: lightYellow,
        base: yellow,
        dark: '#b19a1d',
      },
      notify: {
        light: lightYellow,
        base: yellow,
        dark: '#b19a1d',
      },
      pricePrimary: {
        light: lightGreen,
        base: green,
        dark: darkGreen,
      },
      priceSecondary: {
        light: blue,
        base: darkBlue,
        dark: '#002f6b',
      },
      strike: {
        base: red,
      },
      promoPrimary: {
        light: lightPurple,
        base: purple,
        dark: '#550080',
      },
      promoSecondary: {
        light: '#fe649a',
        base: pink,
        dark: '#b12b5a',
      },
      border: {
        light: gray,
        base: borderGray,
        dark: darkGray,
      },
      background: {
        lightest: white,
        light: lightGray,
        base: buttonGray,
        dark: gray,
        darkest: text,
      },
    },
    palette
  )
}

interface PaletteColor {
  lightest?: string
  light?: string
  base: string
  dark?: string
  darkest?: string
}

interface Palette {
  primary: PaletteColor
  secondary: PaletteColor
  text: PaletteColor
  success: PaletteColor
  error: PaletteColor
  warning: PaletteColor
  alert: PaletteColor
  caution: PaletteColor
  notify: PaletteColor
  pricePrimary: PaletteColor
  priceSecondary: PaletteColor
  strike: PaletteColor
  promoPrimary: PaletteColor
  promoSecondary: PaletteColor
  border: PaletteColor
  background: PaletteColor
}

export interface CreatedTheme extends DefaultTheme {
  contrastRatio: number
  palette: Palette
}

/**
 * Create the theme
 *
 * @param {Object}  theme             The theme to merge against the default
 * @param {Object=} customBreakpoints Custom breakpoints for the theme
 *
 * @returns {Object} The generated theme
 */
export default (
  theme?: DefaultTheme | undefined,
  customBreakpoints = null
): CreatedTheme => {
  const mergedTheme = deepmerge(defaultTheme, theme || {}) as CreatedTheme

  return {
    ...mergedTheme,
    contrastRatio: mergedTheme.contrastRatio || 2.6,
    breakpoints: addAliases(customBreakpoints || mergedTheme.breakpoints),
    mediaQueries: addAliases(mergedTheme.mediaQueries),
    palette: createPalette(mergedTheme),
    colorStyles: createColorStyles(mergedTheme),
    textStyles: createTextStyles(mergedTheme),
  }
}
