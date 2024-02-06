import { render } from '@testing-library/react'
import { ThemeProvider } from 'pcln-design-system'
import React from 'react'

const WithThemeProvider = ({ children }) => <ThemeProvider>{children}</ThemeProvider>

const customRender = (ui, options) => render(ui, { wrapper: WithThemeProvider, ...options })

export * from '@testing-library/react'
export { customRender as render }
