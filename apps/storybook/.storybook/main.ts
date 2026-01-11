// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite'

const require = createRequire(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))

const packagesWithStories = ['carousel', 'core', 'icons', 'autocomplete', 'menu', 'modal', 'slider']
const storiesGlob = 'src/**/*.stories.@(js|jsx|ts|tsx)'

const stories = packagesWithStories.map(
  (packageFolder) => `../../../packages/${packageFolder}/${storiesGlob}`
)

const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-mcp'),
  ],
  framework: '@storybook/react-vite',
  stories,
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        return prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
      },
    },
  },
  features: {
    experimentalComponentsManifest: true,
    experimentalCodeExamples: true,
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {}
    const existingAliases = Array.isArray(config.resolve.alias) ? config.resolve.alias : []
    const iconsPackage = resolve(__dirname, '../../../packages/icons')
    config.resolve.alias = [
      ...existingAliases,
      {
        find: 'pcln-icons',
        replacement: resolve(iconsPackage, 'dist/esm/index.js'),
      },
    ]

    return config
  },
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
