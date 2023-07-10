import { render, RenderResult } from '@testing-library/react'
import PropTypes from 'prop-types'
import React from 'react'

import { ThemeProvider } from '..'

const WithThemeProvider = ({ children }) => <ThemeProvider>{children}</ThemeProvider>
WithThemeProvider.propTypes = {
  children: PropTypes.node,
}

const customRender: (Element, any?) => RenderResult = (ui, options) =>
  render(ui, { wrapper: WithThemeProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
