require('regenerator-runtime/runtime')

module.exports = {
  addons: [
    'storybook-dark-mode/',
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
  stories: ['../packages/**/*.stories.*'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
