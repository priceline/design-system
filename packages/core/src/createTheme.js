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
        light: theme.colors.lightBlue,
        base: theme.colors.blue,
        dark: theme.colors.darkBlue
      },
      secondary: {
        light: theme.colors.lightGreen,
        base: theme.colors.green,
        dark: theme.colors.darkGreen
      },
      text: {
        light: theme.colors.white,
        base: theme.colors.text,
        dark: '#001023'
      },
      warning: {
        light: theme.colors.lightYellow,
        base: theme.colors.yellow,
        dark: '#b19a1d'
      },
      success: {
        light: theme.colors.lightGreen,
        base: theme.colors.green,
        dark: theme.colors.darkGreen
      },
      error: {
        light: theme.colors.lightRed,
        base: theme.colors.red,
        dark: theme.colors.darkRed
      },
      pricePrimary: {
        light: theme.colors.lightGreen,
        base: theme.colors.green,
        dark: theme.colors.darkGreen
      },
      priceSecondary: {
        light: theme.colors.blue,
        base: theme.colors.darkBlue,
        dark: '#002f6b'
      },
      promoPrimary: {
        light: theme.colors.lightPurple,
        base: theme.colors.purple,
        dark: '#550080'
      },
      promoSecondary: {
        light: '#fe649a',
        base: theme.colors.pink,
        dark: '#b12b5a'
      },
      border: {
        light: theme.colors.gray,
        base: theme.colors.borderGray,
        dark: theme.colors.darkGray
      },
      background: theme.colors.lightGray,
      strikePricePrimary: theme.colors.gray,
      strikePriceSecondary: theme.colors.text
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
export const createTextStyles = theme => {
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
export const createColorStyles = theme => {
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
    contrastRatio: mergedTheme.contrastRatio || 3,
    breakpoints: customBreakpoints || mergedTheme.breakpoints,
    palette: createPalette(mergedTheme),
    colorStyles: createColorStyles(mergedTheme),
    textStyles: createTextStyles(mergedTheme)
  }
}
