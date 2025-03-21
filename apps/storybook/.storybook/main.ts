import type { StorybookConfig } from '@storybook/react-vite'
import turbosnap from 'vite-plugin-turbosnap'
import { mergeConfig } from 'vite'

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
    '@storybook/addon-designs',
    '@storybook/addon-coverage',
  ],
  framework: '@storybook/react-vite',
  stories,
  typescript: {
    check: false,
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins:
        configType === 'PRODUCTION'
          ? [
              turbosnap({
                // This should be the base path of your storybook.  In monorepos, you may only need process.cwd().
                rootDir: config.root ?? process.cwd(),
              }),
            ]
          : [],
    })
  },
}

export default config
