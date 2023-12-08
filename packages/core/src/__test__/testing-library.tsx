import { render, type RenderResult } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from '../ThemeProvider'

const WithThemeProvider = ({ children }) => <ThemeProvider>{children}</ThemeProvider>

const customRender: (Element, any?) => RenderResult = (ui, options) =>
  render(ui, { wrapper: WithThemeProvider, ...options })

export * from '@testing-library/react'
export { customRender as render }

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
