import defaultTheme from './theme'
const deepmerge = require('deepmerge')

/**
 * Create the palette based on passed in theme
 *
 * @param {Object=} palette The passed in palette
 * @param {Object}  theme   The passed in theme
 *
 * @returns {Object} The generated palette
 */
const createPalette = ({ palette = {}, ...theme }) => {
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
    buttonGray
  } = theme.colors

  return deepmerge(
    {
      primary: {
        light: lightBlue,
        base: blue,
        dark: darkBlue
      },
      secondary: {
        light: lightGreen,
        base: green,
        dark: darkGreen
      },
      text: {
        light: white,
        base: text,
        dark: '#001023'
      },
      success: {
        light: lightGreen,
        base: green,
        dark: darkGreen
      },
      error: {
        light: lightRed,
        base: red,
        dark: darkRed
      },
      warning: {
        light: lightRed,
        base: red,
        dark: darkRed
      },
      alert: {
        light: lightOrange,
        base: orange,
        dark: darkOrange
      },
      caution: {
        light: lightYellow,
        base: yellow,
        dark: '#b19a1d'
      },
      notify: {
        light: lightYellow,
        base: yellow,
        dark: '#b19a1d'
      },
      pricePrimary: {
        light: lightGreen,
        base: green,
        dark: darkGreen
      },
      priceSecondary: {
        light: blue,
        base: darkBlue,
        dark: '#002f6b'
      },
      promoPrimary: {
        light: lightPurple,
        base: purple,
        dark: '#550080'
      },
      promoSecondary: {
        light: '#fe649a',
        base: pink,
        dark: '#b12b5a'
      },
      border: {
        light: gray,
        base: borderGray,
        dark: darkGray
      },
      background: {
        lightest: white,
        light: lightGray,
        base: buttonGray,
        dark: gray,
        darkest: text
      }
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
  const { fontSizes, fontWeights, lineHeights, letterSpacings } = theme

  return {
    display8: {
      fontSize: fontSizes[8] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display
    },
    display7: {
      fontSize: fontSizes[7] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display
    },
    display6: {
      fontSize: fontSizes[6] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display
    },
    display5: {
      fontSize: fontSizes[5] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display
    },
    display4: {
      fontSize: fontSizes[4] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display
    },
    display3: {
      fontSize: fontSizes[3] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display
    },
    display2: {
      fontSize: fontSizes[2] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display
    },
    display1: {
      fontSize: fontSizes[1] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display
    },
    display0: {
      fontSize: fontSizes[0] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display,
      letterSpacing: letterSpacings.caps,
      textTransform: 'uppercase'
    },
    body2: {
      fontSize: fontSizes[2] + 'px',
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.standard
    },
    body1: {
      fontSize: fontSizes[1] + 'px',
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.standard
    },
    body0: {
      fontSize: fontSizes[0] + 'px',
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.standard
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
  const {
    white,
    text,
    gray,
    lightGray,
    blue,
    lightBlue,
    green,
    lightGreen,
    red,
    lightRed,
    orange,
    purple,
    lightPurple,
    darkOrange
  } = theme.colors

  return {
    whiteOnText: {
      color: white,
      backgroundColor: text
    },
    whiteOnGray: {
      color: white,
      backgroundColor: gray
    },
    textOnLightGray: {
      color: text,
      backgroundColor: lightGray
    },
    whiteOnBlue: {
      color: white,
      backgroundColor: blue
    },
    blueOnLightBlue: {
      color: blue,
      backgroundColor: lightBlue
    },
    whiteOnGreen: {
      color: white,
      backgroundColor: green
    },
    greenOnLightGreen: {
      color: green,
      backgroundColor: lightGreen
    },
    whiteOnRed: {
      color: white,
      backgroundColor: red
    },
    redOnLightRed: {
      color: red,
      backgroundColor: lightRed
    },
    textOnOrange: {
      color: text,
      backgroundColor: orange
    },
    whiteOnPurple: {
      color: white,
      backgroundColor: purple
    },
    purpleOnLightPurple: {
      color: purple,
      backgroundColor: lightPurple
    },
    textOnWhite: {
      color: text,
      backgroundColor: white
    },
    grayOnWhite: {
      color: gray,
      backgroundColor: white
    },
    blueOnWhite: {
      color: blue,
      backgroundColor: white
    },
    greenOnWhite: {
      color: green,
      backgroundColor: white
    },
    redOnWhite: {
      color: red,
      backgroundColor: white
    },
    purpleOnWhite: {
      color: purple,
      backgroundColor: white
    },
    whiteOnDarkOrange: {
      color: white,
      backgroundColor: darkOrange
    },
    info: {
      color: text,
      backgroundColor: lightGray
    },
    success: {
      color: white,
      backgroundColor: green
    },
    warning: {
      color: text,
      backgroundColor: orange
    },
    danger: {
      color: white,
      backgroundColor: red
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
    contrastRatio: mergedTheme.contrastRatio || 2.6,
    breakpoints: customBreakpoints || mergedTheme.breakpoints,
    palette: createPalette(mergedTheme),
    colorStyles: createColorStyles(mergedTheme),
    textStyles: createTextStyles(mergedTheme)
  }
}
