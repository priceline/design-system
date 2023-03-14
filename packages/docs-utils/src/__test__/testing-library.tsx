import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'pcln-design-system'
import PropTypes from 'prop-types'
import React from 'react'

const WithThemeProvider = ({ children }) => <ThemeProvider>{children}</ThemeProvider>
WithThemeProvider.propTypes = {
  children: PropTypes.node,
}

// @ts-ignore
const customRender: (Element, any?) => RenderResult = (ui, options) =>
  render(ui, { wrapper: WithThemeProvider, ...options })

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender as render }
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
