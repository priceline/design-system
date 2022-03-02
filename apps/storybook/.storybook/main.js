const { storykitAddons, features, framework, core } = require('@priceline/storybook-preset')

module.exports = {
  stories: [
    '../../../packages/carousel/src/**/*.stories.js',
    '../../../packages/autocomplete/src/**/*.stories.js',
    '../../../packages/icons/src/**/*.stories.js',
    '../../../packages/menu/src/**/*.stories.js',
    '../../../packages/modal/src/**/*.stories.js',
    '../../../packages/popover/src/**/*.stories.js',
    
    '../../../packages/core/lib-esm/**/*.stories.mdx',
    '../../../packages/core/lib-esm/**/*.stories.@(js|jsx|ts|tsx)',
    
    '../../../packages/slider/lib-esm/**/*.stories.mdx',
    '../../../packages/slider/lib-esm/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: storykitAddons,
  features,
  framework,
  core,
}
