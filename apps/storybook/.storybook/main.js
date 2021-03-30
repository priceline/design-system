module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-performance/register',
    'storybook-addon-jsx',
  ],
  stories: ['../../../packages/*/src/**/*.stories.js'],
}
