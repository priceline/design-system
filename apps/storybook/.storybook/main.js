const path = require('path')

const reactComponentRoot = path.resolve(__dirname, '../../../packages')

module.exports = {
  addons: [
    '@storybook/addon-a11y/',
    '@storybook/addon-actions/',
    '@storybook/addon-knobs/',
    '@storybook/addon-viewport/',
  ],
  presets: [
    {
      name: '@storybook/addon-docs/preset',
      options: {
        configureJSX: true,
      },
    },
  ],
  stories: ['../../../packages/**/src/**/*.stories.js'],
  webpackFinal: async (config, { configType }) => {
    const rushCIPath = process.env.RUSH_TEMP_FOLDER

    const mdxJsxRule = config.module.rules.find(
      (rule) => rule && rule.include && rule.include[0]
    )

    mdxJsxRule && mdxJsxRule.include.push(reactComponentRoot)
    mdxJsxRule && mdxJsxRule.exclude.push(/\/node_modules\//)

    if (mdxJsxRule && rushCIPath) {
      mdxJsxRule.include.push(path.resolve(rushCIPath))
    }

    return config
  },
}
