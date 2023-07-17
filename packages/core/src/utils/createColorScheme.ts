import { ColorSchemes, PaletteFamilies } from '../theme'

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
      backgroundName: 'primary.base',
      foreground: background.lightest,
    },
    primaryLight: {
      background: primary.light,
      backgroundName: 'primary.light',
      foreground: primary.base,
    },
    primaryLightest: {
      background: background.lightest,
      backgroundName: 'background.lightest',
      foreground: primary.base,
    },
    primaryDark: {
      background: primary.dark,
      backgroundName: 'primary.dark',
      foreground: background.lightest,
    },
    primaryShade: {
      background: primary.shade,
      backgroundName: 'primary.shade',
      foreground: background.lightest,
    },
    primaryDarkOnLight: {
      background: primary.light,
      backgroundName: 'primary.light',
      foreground: primary.dark,
    },

    // Secondary
    ///////////////////////////////////////////////
    secondary: {
      background: secondary.base,
      backgroundName: 'secondary.base',
      foreground: background.lightest,
    },
    secondaryLight: {
      background: secondary.light,
      backgroundName: 'secondary.light',
      foreground: secondary.base,
    },
    secondaryLightest: {
      background: background.lightest,
      backgroundName: 'background.lightest',
      foreground: secondary.base,
    },
    secondaryDark: {
      background: secondary.dark,
      backgroundName: 'secondary.dark',
      foreground: background.lightest,
    },
    secondaryDarkOnLight: {
      background: secondary.light,
      backgroundName: 'secondary.light',
      foreground: secondary.dark,
    },

    // Neutral
    ///////////////////////////////////////////////
    neutral: {
      background: background.dark,
      backgroundName: 'background.dark',
      foreground: background.lightest,
    },
    neutralLight: {
      background: background.base,
      backgroundName: 'background.base',
      foreground: background.dark,
    },
    neutralLightest: {
      background: background.lightest,
      backgroundName: 'background.lightest',
      foreground: background.dark,
    },
    neutralDark: {
      background: background.darkest,
      backgroundName: 'background.darkest',
      foreground: background.lightest,
    },
    neutralDarkOnLight: {
      background: background.light,
      backgroundName: 'background.light',
      foreground: background.darkest,
    },

    // Success
    ///////////////////////////////////////////////
    success: {
      background: success.base,
      backgroundName: 'success.base',
      foreground: background.lightest,
    },
    successLight: {
      background: success.light,
      backgroundName: 'success.light',
      foreground: success.base,
    },
    successLightest: {
      background: background.lightest,
      backgroundName: 'background.lightest',
      foreground: success.base,
    },
    successDark: {
      background: success.dark,
      backgroundName: 'success.dark',
      foreground: background.lightest,
    },
    successDarkOnLight: {
      background: success.light,
      backgroundName: 'success.light',
      foreground: success.dark,
    },

    // Warning
    ///////////////////////////////////////////////
    warning: {
      background: warning.base,
      backgroundName: 'warning.base',
      foreground: background.lightest,
    },
    warningLight: {
      background: warning.light,
      backgroundName: 'warning.light',
      foreground: warning.base,
    },
    warningLightest: {
      background: background.lightest,
      backgroundName: 'background.lightest',
      foreground: warning.base,
    },

    // Caution
    //////////////////////////////////////////////
    cautionLight: {
      background: caution.light,
      backgroundName: 'caution.light',
      foreground: text.base,
    },

    // Highlight
    //////////////////////////////////////////////
    highlightLight: {
      background: highlight.light,
      backgroundName: 'highlight.light',
      foreground: secondary.dark,
    },

    // Promo
    //////////////////////////////////////////////
    promo: {
      background: promoPrimary.base,
      backgroundName: 'promoPrimary.base',
      foreground: text.lightest,
    },
    promoLight: {
      background: promoPrimary.light,
      backgroundName: 'promoPrimary.light',
      foreground: promoPrimary.base,
    },
    promoLightest: {
      background: background.lightest,
      backgroundName: 'background.lightest',
      foreground: promoPrimary.base,
    },
    promoDark: {
      background: promoPrimary.dark,
      backgroundName: 'promoPrimary.dark',
      foreground: text.lightest,
    },
    promoDarkOnLight: {
      background: promoPrimary.light,
      backgroundName: 'promoPrimary.light',
      foreground: promoPrimary.dark,
    },

    // Alert
    //////////////////////////////////////////////
    alert: {
      background: alert.base,
      backgroundName: 'alert.base',
      foreground: background.lightest,
    },
    alertLight: {
      background: alert.light,
      backgroundName: 'alert.light',
      foreground: alert.base,
    },
    alertLightest: {
      background: background.lightest,
      backgroundName: 'background.lightest',
      foreground: alert.base,
    },
    alertDarkOnLight: {
      background: alert.light,
      backgroundName: 'alert.light',
      foreground: alert.tone,
    },
  }
}
