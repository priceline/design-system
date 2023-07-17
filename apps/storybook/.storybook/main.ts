import type { StorybookConfig } from '@storybook/react-vite'

const packagesWithStories = [
  'carousel',
  'core',
  'icons',
  'autocomplete',
  'menu',
  'modal',
  'popover',
  'slider',
]
const storiesGlob = 'src/**/*.stories.@(js|jsx|ts|tsx)'

const stories = packagesWithStories.map(
  (packageFolder) => `../../../packages/${packageFolder}/${storiesGlob}`
)

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
    '@storybook/addon-coverage',
  ],
  docs: {
    autodocs: true,
  },
  framework: '@storybook/react-vite',
  stories,
  typescript: {
    check: false,
  },
}

export default config
