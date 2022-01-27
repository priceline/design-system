import { theme as dsTheme } from '../theme'

/**
 * Create textStyles based on the passed in theme
 *
 * @param {Object} theme The passed in theme
 *
 * @returns {Object} The generated textStyles
 */
const createTextStyles = (theme: typeof dsTheme = {}) => {
  const { fontSizes, fontWeights, lineHeights, letterSpacings } = theme

  return {
    display8: {
      fontSize: fontSizes[8] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display,
    },
    display7: {
      fontSize: fontSizes[7] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display,
    },
    display6: {
      fontSize: fontSizes[6] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display,
    },
    display5: {
      fontSize: fontSizes[5] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display,
    },
    display4: {
      fontSize: fontSizes[4] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display,
    },
    display3: {
      fontSize: fontSizes[3] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display,
    },
    display2: {
      fontSize: fontSizes[2] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display,
    },
    display1: {
      fontSize: fontSizes[1] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display,
    },
    display0: {
      fontSize: fontSizes[0] + 'px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.display,
      letterSpacing: letterSpacings.caps,
      textTransform: 'uppercase',
    },
    body2: {
      fontSize: fontSizes[2] + 'px',
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.standard,
    },
    body1: {
      fontSize: fontSizes[1] + 'px',
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.standard,
    },
    body0: {
      fontSize: fontSizes[0] + 'px',
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.standard,
    },
    small: {
      fontSize: '10px',
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.standard,
    },
  }
}

export { createTextStyles }
