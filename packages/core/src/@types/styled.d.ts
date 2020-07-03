import 'styled-components'

interface ColorStyle {
  color: string
  backgroundColor: string
}

interface TextStyle {
  fontSize: string
  fontWeight: string
  lineHeight: string
  letterSpacing?: string
  textTransform?: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
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
    colorStyles: {
      whiteOnText: ColorStyle
      whiteOnGray: ColorStyle
      textOnLightGray: ColorStyle
      whiteOnBlue: ColorStyle
      blueOnLightBlue: ColorStyle
      whiteOnGreen: ColorStyle
      greenOnLightGreen: ColorStyle
      whiteOnRed: ColorStyle
      redOnLightRed: ColorStyle
      textOnOrange: ColorStyle
      whiteOnPurple: ColorStyle
      purpleOnLightPurple: ColorStyle
      textOnWhite: ColorStyle
      grayOnWhite: ColorStyle
      blueOnWhite: ColorStyle
      greenOnWhite: ColorStyle
      redOnWhite: ColorStyle
      purpleOnWhite: ColorStyle
      whiteOnDarkOrange: ColorStyle
      info: ColorStyle
      success: ColorStyle
      warning: ColorStyle
      danger: ColorStyle
    }
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
    textStyles: {
      display8: TextStyle
      display7: TextStyle
      display6: TextStyle
      display5: TextStyle
      display4: TextStyle
      display3: TextStyle
      display2: TextStyle
      display1: TextStyle
      display0: TextStyle
      body2: TextStyle
      body1: TextStyle
      body0: TextStyle
      small: TextStyle
    }
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
  }
}
