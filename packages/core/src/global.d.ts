import 'styled-components'
import type { ColorSchemes, ColorStyles, PaletteFamilies, TextStyle, ZIndices } from './theme/theme'

declare global {
  var rendererCreateWithTheme: any
}

declare module 'styled-components' {
  export interface DefaultTheme {
    space: string[]
    colors: Record<string, string>
    componentStyles: Record<string, Record<string, Record<string, Record<string, unknown>>>>
    mediaQueries: string[]
    breakpoints: string[]
    palette: PaletteFamilies
    colorStyles: ColorStyles
    textStyles: TextStyle[]
    contrastRatio: number
    colorSchemes: ColorSchemes
    zIndices: ZIndices
  }
}
