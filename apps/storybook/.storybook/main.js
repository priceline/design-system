module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', 'storybook-addon-performance/register'],
  stories: [
    '../../../packages/*/src/**/*.stories.js',
    '../../../packages/*/lib-esm/**/*.stories.mdx',
    '../../../packages/*/lib-esm/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  framework: '@storybook/react',
  features: {
    postcss: false,
    storyStoreV7: true,
  },
  core: {
    builder: 'webpack5',
  },
}
