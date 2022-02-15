const { heftStoryGlobs, storykitAddons, features, framework, core } = require('@priceline/storybook-preset')

module.exports = {
  stories: heftStoryGlobs,
  addons: storykitAddons,
  features,
  framework,
  core,
}
