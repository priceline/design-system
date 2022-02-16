import { a11y } from './a11y'
import { viewports } from '../viewports'

/** @public */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y,
  viewport: { viewports },
}
