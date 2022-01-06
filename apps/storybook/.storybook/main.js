module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-performance/register',
    'storybook-addon-jsx',
  ],
  stories: ['../../../packages/*/src/**/*.stories.js'],
  framework: '@storybook/react',
  features: {
    postcss: false,
    storyStoreV7: true,
  },
}
