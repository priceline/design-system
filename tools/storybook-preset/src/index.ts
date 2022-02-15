export * from '@storybook/addon-actions'
export * from '@storybook/addon-viewport'
export * from 'storybook-addon-performance'

/** @public */
export const heftStoryGlobs = ['../lib-esm/**/*.stories.mdx', '../lib-esm/**/*.stories.@(js|jsx|ts|tsx)']

/** @public */
export const babelStoryGlobs = ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)']

/** @public */
export const storykitAddons = [
  '@storybook/addon-links',
  '@storybook/addon-essentials',
  '@storybook/addon-a11y',
  'storybook-addon-performance/register',
  'addon-screen-reader',
]

/** @public */
export const features = {
  postcss: false,
  storyStoreV7: true,
}

/** @public */
export const framework = '@storybook/react'

/** @public */
export const core = {
  builder: 'webpack5',
}

export * from './decorators'
export * from './parameters'
export * from './preset'
