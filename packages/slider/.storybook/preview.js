const { parameters, decorators } = require('@priceline/storybook-preset')

const brandingOptions = {
  docs: {
    brandTitle: 'pcln-slider',
    brandUrl: 'https://github.com/priceline/design-system/packages/slider',
  },
}

module.exports = {
  parameters: {
    ...parameters,
    options: {
      ...parameters.options,
      ...brandingOptions,
    },
  },
  decorators,
}
