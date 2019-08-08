/**
 * Create colorStyles based on the passed in theme
 *
 * @param {Object} theme The passed in theme
 *
 * @returns {Object} The generated colorStyles
 */
export default (theme = {}) => {
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
