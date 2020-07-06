import React from 'react'
import styled, {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components'

import { createTheme } from '../utils'

interface BaseProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export const Base = styled.div`
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.font};
  line-height: ${({ theme }: { theme: DefaultTheme }) =>
    theme.lineHeights.standard};
  font-weight: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fontWeights.medium};

  * {
    box-sizing: border-box;
  }
` as React.FunctionComponent<BaseProps>

interface ThemeProviderProps {
  theme?: DefaultTheme
  customBreakpoints?: string[]
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (
  props: ThemeProviderProps
) => {
  const { theme, customBreakpoints } = props

  // Once updated to React 16.8 this should be wrapped in React.useMemo()
  const mergedTheme = createTheme(theme, customBreakpoints)

  return (
    <StyledThemeProvider theme={mergedTheme}>
      <Base {...props} />
    </StyledThemeProvider>
  )
}

export default ThemeProvider
