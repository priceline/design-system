import React from 'react'
import styled, {
  ThemeProvider as StyledThemeProvider
} from 'styled-components'
import theme from './theme'

export const Base = styled.div`
  font-family: ${theme.font};
`

const ThemeProvider = props => (
  <StyledThemeProvider theme={theme}>
    <Base {...props} />
  </StyledThemeProvider>
)

export default ThemeProvider
