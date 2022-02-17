import React from 'react'
import PropTypes from 'prop-types'
import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from '..'

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
