import styled, {
  ThemeProvider as StyledThemeProvider
} from 'styled-components'
import theme from './theme'

const Base = styled.div`
  font-family: ${theme.font};
`

const ThemeProvider = props => (
  <StyledThemeProvider theme={theme}>
    <Base {...props} />
  </StyledThemeProvider>
)

export default ThemeProvider
