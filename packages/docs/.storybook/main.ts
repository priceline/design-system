const { heftStoryGlobs, storykitAddons, features, framework, core } = require('@priceline/storybook-preset')

module.exports = {
  stories: heftStoryGlobs,
  addons: [...storykitAddons, '@storybook/addon-interactions'],
  features: {
    ...features,
    interactionsDebugger: true,
  },
  framework,
  core,
}
