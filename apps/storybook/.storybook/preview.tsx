import type { Preview } from '@storybook/react'
import { a11y } from './parameters/a11y'
import { backgrounds } from './parameters/backgrounds'
import { viewport } from './parameters/viewport'
import { decorators } from './decorators'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y,
    backgrounds,
    viewport,
  },
  tags: ['autodocs'],
  decorators: decorators,
}

export default preview
