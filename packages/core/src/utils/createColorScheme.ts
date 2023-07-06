import { ColorSchemes, PaletteFamilies } from '../theme'

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
]

export const createColorScheme = ({ palette }: { palette: PaletteFamilies }): ColorSchemes => {
  const {
    primary,
    secondary,
    background,
    success,
    warning,
    caution,
    text,
    highlight,
    promoPrimary,
    alert,
  } = palette

  return {
    // Primary
    ///////////////////////////////////////////////
    primary: {
      background: primary.base,
      foreground: background.lightest,
    },
    primaryLight: {
      background: primary.light,
      foreground: primary.base,
    },
    primaryLightest: {
      background: background.lightest,
      foreground: primary.base,
    },
    primaryDark: {
      background: primary.dark,
      foreground: background.lightest,
    },
    primaryShade: {
      background: primary.shade,
      foreground: background.lightest,
    },
    primaryDarkOnLight: {
      background: primary.light,
      foreground: primary.dark,
    },

    // Secondary
    ///////////////////////////////////////////////
    secondary: {
      background: secondary.base,
      foreground: background.lightest,
    },
    secondaryLight: {
      background: secondary.light,
      foreground: secondary.base,
    },
    secondaryLightest: {
      background: background.lightest,
      foreground: secondary.base,
    },
    secondaryDark: {
      background: secondary.dark,
      foreground: background.lightest,
    },
    secondaryDarkOnLight: {
      background: secondary.light,
      foreground: secondary.dark,
    },

    // Neutral
    ///////////////////////////////////////////////
    neutral: {
      background: background.dark,
      foreground: background.lightest,
    },
    neutralLight: {
      background: background.base,
      foreground: background.dark,
    },
    neutralLightest: {
      background: background.lightest,
      foreground: background.dark,
    },
    neutralDark: {
      background: background.darkest,
      foreground: background.lightest,
    },
    neutralDarkOnLight: {
      background: background.light,
      foreground: background.darkest,
    },

    // Success
    ///////////////////////////////////////////////
    success: {
      background: success.base,
      foreground: background.lightest,
    },
    successLight: {
      background: success.light,
      foreground: success.base,
    },
    successLightest: {
      background: background.lightest,
      foreground: success.base,
    },
    successDark: {
      background: success.dark,
      foreground: background.lightest,
    },
    successDarkOnLight: {
      background: success.light,
      foreground: success.dark,
    },

    // Warning
    ///////////////////////////////////////////////
    warning: {
      background: warning.base,
      foreground: background.lightest,
    },
    warningLight: {
      background: warning.light,
      foreground: warning.base,
    },
    warningLightest: {
      background: background.lightest,
      foreground: warning.base,
    },

    // Caution
    //////////////////////////////////////////////
    cautionLight: {
      background: caution.light,
      foreground: text.base,
    },

    // Highlight
    //////////////////////////////////////////////
    highlightLight: {
      background: highlight.light,
      foreground: secondary.dark,
    },

    // Promo
    //////////////////////////////////////////////
    promo: {
      background: promoPrimary.base,
      foreground: text.lightest,
    },
    promoLight: {
      background: promoPrimary.light,
      foreground: promoPrimary.base,
    },
    promoLightest: {
      background: background.lightest,
      foreground: promoPrimary.base,
    },
    promoDark: {
      background: promoPrimary.dark,
      foreground: text.lightest,
    },
    promoDarkOnLight: {
      background: promoPrimary.light,
      foreground: promoPrimary.dark,
    },

    // Alert
    //////////////////////////////////////////////
    alert: {
      background: alert.base,
      foreground: background.lightest,
    },
    alertLight: {
      background: alert.light,
      foreground: alert.base,
    },
    alertLightest: {
      background: background.lightest,
      foreground: alert.base,
    },
    alertDarkOnLight: {
      background: alert.light,
      foreground: alert.tone,
    },
  }
}
