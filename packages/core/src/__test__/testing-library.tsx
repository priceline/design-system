import { render } from '@testing-library/react'
import { ThemeProvider } from '../ThemeProvider'

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    ...options,
  })
}

export * from '@testing-library/react'
export { customRender as render }

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
