const deepmerge = require('deepmerge')

/**
 * Create the palette based on passed in theme
 *
 * @param {Object=} palette The passed in palette
 * @param {Object}  theme   The passed in theme
 *
 * @returns {Object} The generated palette
 */
export const createPalette = ({ palette = {}, ...theme }) => {
  const {
    lightBlue,
    tintBlue,
    blue,
    toneBlue,
    darkBlue,
    shadeBlue,

    lightGreen,
    tintGreen,
    green,
    toneGreen,
    darkGreen,
    shadeGreen,

    lightRed,
    tintRed,
    red,
    toneRed,
    darkRed,
    shadeRed,

    lightOrange,
    tintOrange,
    orange,
    toneOrange,
    darkOrange,
    shadeOrange,

    lightYellow,
    tintYellow,
    yellow,
    toneYellow,
    darkYellow,
    shadeYellow,

    lightPurple,
    tintPurple,
    purple,
    tonePurple,
    darkPurple,
    shadePurple,

    lightPink,
    tintPink,
    pink,
    tonePink,
    darkPink,
    shadePink,

    lightestText,
    lightText,
    tintText,
    text,
    darkText,
    headingText,

    lightHighlight,
    tintHighlight,
    highlight,
    toneHighlight,
    darkHighlight,
    shadeHighlight,

    lightestBackground,
    lightBackground,
    tintBackground,
    background,
    toneBackground,
    darkBackground,
    shadeBackground,
    darkestBackground,

    lightBorder,
    tintBorder,
    border,
    toneBorder,
    darkBorder,
    shadeBorder,
  } = theme.colors

  return deepmerge(
    {
      primary: {
        light: lightBlue,
        tint: tintBlue,
        base: blue,
        tone: toneBlue,
        dark: darkBlue,
        shade: shadeBlue,
      },
      secondary: {
        light: lightGreen,
        tint: tintGreen,
        base: green,
        tone: toneGreen,
        dark: darkGreen,
        shade: shadeGreen,
      },
      text: {
        lightest: lightestText,
        light: lightText,
        tint: tintText,
        base: text,
        dark: darkText,
        heading: headingText,
      },
      highlight: {
        light: lightHighlight,
        tint: tintHighlight,
        base: highlight,
        tone: toneHighlight,
        dark: darkHighlight,
        shade: shadeHighlight,
      },
      success: {
        light: lightGreen,
        tint: tintGreen,
        base: green,
        tone: toneGreen,
        dark: darkGreen,
        shade: shadeGreen,
      },
      error: {
        light: lightRed,
        tint: tintRed,
        base: red,
        tone: toneRed,
        dark: darkRed,
        shade: shadeRed,
      },
      warning: {
        light: lightRed,
        tint: tintRed,
        base: red,
        tone: toneRed,
        dark: darkRed,
        shade: shadeRed,
      },
      alert: {
        light: lightOrange,
        tint: tintOrange,
        base: orange,
        tone: toneOrange,
        dark: darkOrange,
        shade: shadeOrange,
      },
      caution: {
        light: lightYellow,
        tint: tintYellow,
        base: yellow,
        tone: toneYellow,
        dark: darkYellow,
        shade: shadeYellow,
      },
      notify: {
        light: lightYellow,
        tint: tintYellow,
        base: yellow,
        tone: toneYellow,
        dark: darkYellow,
        shade: shadeYellow,
      },
      pricePrimary: {
        light: lightGreen,
        tint: tintGreen,
        base: green,
        tone: toneGreen,
        dark: darkGreen,
        shade: shadeGreen,
      },
      priceSecondary: {
        light: lightBlue,
        tint: tintBlue,
        base: blue,
        tone: toneBlue,
        dark: darkBlue,
        shade: shadeBlue,
      },
      strike: {
        base: red,
      },
      promoPrimary: {
        light: lightPurple,
        tint: tintPurple,
        base: purple,
        tone: tonePurple,
        dark: darkPurple,
        shade: shadePurple,
      },
      promoSecondary: {
        light: lightPink,
        tint: tintPink,
        base: pink,
        tone: tonePink,
        dark: darkPink,
        shade: shadePink,
      },
      border: {
        light: lightBorder,
        tint: tintBorder,
        base: border,
        tone: toneBorder,
        dark: darkBorder,
        shade: shadeBorder,
      },
      background: {
        lightest: lightestBackground,
        light: lightBackground,
        tint: tintBackground,
        base: background,
        tone: toneBackground,
        dark: darkBackground,
        shade: shadeBackground,
        darkest: darkestBackground,
      },
    },
    palette
  )
}
