import React from 'react'
import { node } from 'prop-types'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'pcln-design-system'

const WithThemeProvider = ({ children }) => <ThemeProvider>{children}</ThemeProvider>
WithThemeProvider.propTypes = {
  children: node,
}

const renderWithTheme = (ui, options) => render(ui, { wrapper: WithThemeProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { renderWithTheme as render }
