require('regenerator-runtime/runtime')
const path = require('path')

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
  stories: [
    '../packages/**/src/**/*.stories.*',
    '../packages/**/storybook/**/*.stories.*',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          },
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
