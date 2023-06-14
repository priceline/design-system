import type { StorybookConfig } from '@storybook/react-webpack5'

import { storykitAddons, framework } from '@priceline/storybook-preset'

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

const config: StorybookConfig = {
  framework,
  stories: packagesWithStories.map((packageFolder) => `../../../packages/${packageFolder}/${storiesGlob}`),
  addons: storykitAddons,
  docs: {
    autodocs: true,
  },
  typescript: {
    check: false,
    checkOptions: {},
  },
}

export default config
