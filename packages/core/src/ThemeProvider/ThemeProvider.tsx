import React from 'react'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { createTheme } from '../utils'

export const Base = styled.div`
  font-family: ${(props) => props.theme.font};
  line-height: ${(props) => props.theme.lineHeights.standard};
  font-weight: ${(props) => props.theme.fontWeights.medium};

  * {
    box-sizing: border-box;
  }
`

export type ThemeProviderProps = {
  theme?: {
    breakpoints?: string[]
    mediaQueries?: string[]
    space?: number[]
    font?: string
    fontSizes?: number[]
    fontWeights?: {
      medium?: number
      bold?: number
      regular?: number
    }
    lineHeights?: {
      standard?: number
      display?: number
    }
    letterSpacings?: {
      normal?: string
      caps?: string
    }
    regular?: number
    bold?: number
    colors?: object
    palette?: object
    radii?: number[]
    radius?: string
    boxShadows?: string[]
    maxContainerWidth?: string
    duration?: object
    timingFunctions?: object
    transitionDelays?: object
  }
  children?: React.ReactNode
  customBreakpoints?: string[]
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, customBreakpoints, ...props }) => {
  // Once updated to React 16.8 this should be wrapped in React.useMemo()
  const mergedTheme = (existingTheme) => createTheme(theme, customBreakpoints, existingTheme)

  return (
    <StyledThemeProvider theme={mergedTheme}>
      <Base {...props} />
    </StyledThemeProvider>
  )
}
