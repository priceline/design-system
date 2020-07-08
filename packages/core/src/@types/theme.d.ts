import { CreatedTheme } from '../utils/createTheme'
import { DefaultTheme } from 'styled-components'

declare interface ThemeProps {
  theme?: Partial<CreatedTheme>
}

declare interface CreatedTheme extends DefaultTheme {
  contrastRatio: number
  palette: Palette
}
