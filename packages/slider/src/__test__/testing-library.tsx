import type { RenderOptions, RenderResult } from '@testing-library/react'
import type { ReactElement } from 'react'

import { render } from '@testing-library/react'
import { ThemeProvider } from 'pcln-design-system'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
