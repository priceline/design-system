export * from '@storybook/addon-actions'

/** @public */
export const heftStoryGlobs = ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)']

/** @public */
export const babelStoryGlobs = ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)']

/** @public */
export const storykitAddons = [
  '@storybook/addon-essentials',
  '@storybook/addon-a11y',
  'storybook-addon-designs',
  'storybook-addon-performance',
]

/** @public */
export const features = {
  postcss: false,
  storyStoreV7: true,
}

/** @public */
export const framework = '@storybook/react-vite'

export * from './decorators'
export { parameters } from './parameters'
