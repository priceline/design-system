import { a11y } from './parameters/a11y'
import { backgrounds } from './parameters/backgrounds'
import { viewport } from './parameters/viewport'

export { decorators } from './decorators'

export const parameters = {
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
}
