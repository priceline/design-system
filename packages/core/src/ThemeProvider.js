import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import nextTheme from './theme'
import createTheme from './createTheme'

export const Base = styled.div`
  font-family: ${props => props.theme.font};
  line-height: ${props => props.theme.lineHeights.standard};
  font-weight: ${props => props.theme.fontWeights.medium};

  * {
    box-sizing: border-box;
  }
`

const ThemeProvider = ({ customBreakpoints, ...props }) => {
  const breakpoints = customBreakpoints || nextTheme.breakpoints
  const theme = {
    ...nextTheme,
    breakpoints
  }

  return (
    <StyledThemeProvider theme={createTheme(theme)}>
      <Base {...props} />
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
  /** Array of pixel values for custom breakpoint overrides */
  customBreakpoints: PropTypes.arrayOf(PropTypes.number)
}

export default ThemeProvider
