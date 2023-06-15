import type { StorybookConfig } from '@storybook/react-vite'

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
  },
}

export default config
