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
  stories: ['../packages/**/*.stories.js'],
}
