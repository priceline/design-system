import type { DecoratorFunction } from '@storybook/addon-actions'

import React from 'react'
import { ThemeProvider } from 'pcln-design-system'
import { withPerformance } from 'storybook-addon-performance'

const ThemeProviderDecorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
)

/** @public */
export const decorators: DecoratorFunction[] = [ThemeProviderDecorator, withPerformance]
