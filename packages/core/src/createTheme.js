import deepmerge from 'deepmerge'
import defaultTheme from './theme'

/**
 * Create the palette based on passed in theme
 *
 * @param {Object=} palette The passed in palette
 * @param {Object}  theme   The passed in theme
 *
 * @returns {Object} The generated palette
 */
const createPalette = ({ palette = {}, ...theme }) => {
  return deepmerge(
    {
      primary: {
        base: theme.colors.blue,
        hover: theme.colors.darkBlue,
        contrast: theme.colors.white
      },
      secondary: {
        base: theme.colors.green,
        hover: theme.colors.darkGreen,
        contrast: theme.colors.white
      },
      textPrimary: theme.colors.text,
      textSecondary: theme.colors.gray,
      background: theme.colors.lightGray,
      warning: theme.colors.yellow,
      success: theme.colors.green,
      error: theme.colors.red,
      pricePrimary: theme.colors.green,
      priceSecondary: theme.colors.darkBlue,
      strikePricePrimary: theme.colors.gray,
      strikePriceSecondary: theme.colors.text,
      promo1: theme.colors.purple,
      promo2: theme.colors.pink,
      border: theme.colors.borderGray
    },
    palette
  )
}

/**
 * Create textStyles based on the passed in theme
 *
 * @param {Object} theme The passed in theme
 *
 * @returns {Object} The generated textStyles
 */
const createTextStyles = theme => {
  return {
    display8: {
      fontSize: theme.fontSizes[8] + 'px',
      fontWeight: theme.fontWeights.bold,
      lineHeight: theme.lineHeights.display
    },
    display7: {
      fontSize: theme.fontSizes[7] + 'px',
      fontWeight: theme.fontWeights.bold,
      lineHeight: theme.lineHeights.display
    },
    display6: {
      fontSize: theme.fontSizes[6] + 'px',
      fontWeight: theme.fontWeights.bold,
      lineHeight: theme.lineHeights.display
    },
    display5: {
      fontSize: theme.fontSizes[5] + 'px',
      fontWeight: theme.fontWeights.bold,
      lineHeight: theme.lineHeights.display
    },
    display4: {
      fontSize: theme.fontSizes[4] + 'px',
      fontWeight: theme.fontWeights.bold,
      lineHeight: theme.lineHeights.display
    },
    display3: {
      fontSize: theme.fontSizes[3] + 'px',
      fontWeight: theme.fontWeights.bold,
      lineHeight: theme.lineHeights.display
    },
    display2: {
      fontSize: theme.fontSizes[2] + 'px',
      fontWeight: theme.fontWeights.bold,
      lineHeight: theme.lineHeights.display
    },
    display1: {
      fontSize: theme.fontSizes[1] + 'px',
      fontWeight: theme.fontWeights.bold,
      lineHeight: theme.lineHeights.display
    },
    display0: {
      fontSize: theme.fontSizes[0] + 'px',
      fontWeight: theme.fontWeights.bold,
      lineHeight: theme.lineHeights.display,
      letterSpacing: theme.letterSpacings.caps,
      textTransform: 'uppercase'
    },
    body2: {
      fontSize: theme.fontSizes[2] + 'px',
      fontWeight: theme.fontWeights.medium,
      lineHeight: theme.lineHeights.standard
    },
    body1: {
      fontSize: theme.fontSizes[1] + 'px',
      fontWeight: theme.fontWeights.medium,
      lineHeight: theme.lineHeights.standard
    },
    body0: {
      fontSize: theme.fontSizes[0] + 'px',
      fontWeight: theme.fontWeights.medium,
      lineHeight: theme.lineHeights.standard
    }
  }
}

/**
 * Create colorStyles based on the passed in theme
 *
 * @param {Object} theme The passed in theme
 *
 * @returns {Object} The generated colorStyles
 */
const createColorStyles = theme => {
  return {
    whiteOnText: {
      color: theme.colors.white,
      backgroundColor: theme.colors.text
    },
    whiteOnGray: {
      color: theme.colors.white,
      backgroundColor: theme.colors.gray
    },
    textOnLightGray: {
      color: theme.colors.text,
      backgroundColor: theme.colors.lightGray
    },
    whiteOnBlue: {
      color: theme.colors.white,
      backgroundColor: theme.colors.blue
    },
    blueOnLightBlue: {
      color: theme.colors.blue,
      backgroundColor: theme.colors.lightBlue
    },
    whiteOnGreen: {
      color: theme.colors.white,
      backgroundColor: theme.colors.green
    },
    greenOnLightGreen: {
      color: theme.colors.green,
      backgroundColor: theme.colors.lightGreen
    },
    whiteOnRed: {
      color: theme.colors.white,
      backgroundColor: theme.colors.red
    },
    redOnLightRed: {
      color: theme.colors.red,
      backgroundColor: theme.colors.lightRed
    },
    textOnOrange: {
      color: theme.colors.text,
      backgroundColor: theme.colors.orange
    },
    whiteOnPurple: {
      color: theme.colors.white,
      backgroundColor: theme.colors.purple
    },
    purpleOnLightPurple: {
      color: theme.colors.purple,
      backgroundColor: theme.colors.lightPurple
    },
    textOnWhite: {
      color: theme.colors.text,
      backgroundColor: theme.colors.white
    },
    grayOnWhite: {
      color: theme.colors.gray,
      backgroundColor: theme.colors.white
    },
    blueOnWhite: {
      color: theme.colors.blue,
      backgroundColor: theme.colors.white
    },
    greenOnWhite: {
      color: theme.colors.green,
      backgroundColor: theme.colors.white
    },
    redOnWhite: {
      color: theme.colors.red,
      backgroundColor: theme.colors.white
    },
    purpleOnWhite: {
      color: theme.colors.purple,
      backgroundColor: theme.colors.white
    },
    whiteOnDarkOrange: {
      color: theme.colors.white,
      backgroundColor: theme.colors.darkOrange
    },
    info: {
      color: theme.colors.text,
      backgroundColor: theme.colors.lightGray
    },
    success: {
      color: theme.colors.white,
      backgroundColor: theme.colors.green
    },
    warning: {
      color: theme.colors.text,
      backgroundColor: theme.colors.orange
    },
    danger: {
      color: theme.colors.white,
      backgroundColor: theme.colors.red
    }
  }
}

/**
 * Create the theme
 *
 * @param {Object}  theme             The theme to merge against the default
 * @param {Object=} customBreakpoints Custom breakpoints for the theme
 *
 * @returns {Object} The generated theme
 */
export default (theme = {}, customBreakpoints = null) => {
  const mergedTheme = deepmerge(defaultTheme, theme)

  return {
    ...mergedTheme,
    breakpoints: customBreakpoints || mergedTheme.breakpoints,
    palette: createPalette(mergedTheme),
    colorStyles: createColorStyles(mergedTheme),
    textStyles: createTextStyles(mergedTheme)
  }
}
