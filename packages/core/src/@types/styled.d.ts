import 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    transitionDelays: {
      small: string
      medium: string
      large: string
      xLarge: string
    }
    timingFunctions: {
      easeInOut: string
      easeIn: string
      easeOut: string
    }
    duration: {
      fast: string
      normal: string
      slow: string
      slowest: string
    }
    maxContainerWidth: string
    textShadows: {
      sm: string
      md: string
    }
    boxShadows: string[]
    radius: string
    radii: number[]
    colorStyles: ColorStyles
    colors: {
      black: string
      white: string
      text: string
      blue: string
      lightBlue: string
      darkBlue: string
      gray: string
      lightGray: string
      buttonGray: string
      borderGray: string
      darkGray: string
      green: string
      lightGreen: string
      darkGreen: string
      red: string
      lightRed: string
      darkRed: string
      orange: string
      darkOrange: string
      lightOrange: string
      purple: string
      lightPurple: string
      yellow: string
      lightYellow: string
      pink: string
      darkPurple: string
    }
    textStyles: TextStyles
    fontWeights: {
      bold: number
      medium: number
      regular: number
    }
    bold: number
    regular: number
    letterSpacings: {
      normal: string
      caps: string
    }
    lineHeights: {
      standard: number
      display: number
    }
    fontSizes: number[]
    font: string
    space: number[]
    mediaQueries: string[]
    breakpoints: string[]
    contrastRatio?: number
  }
}
