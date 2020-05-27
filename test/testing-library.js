import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../packages/core/src/ThemeProvider'

const WithThemeProvider = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
)

const customRender = (ui, options) =>
  render(ui, { wrapper: WithThemeProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
