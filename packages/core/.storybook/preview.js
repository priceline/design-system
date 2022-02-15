const { parameters, decorators } = require('@priceline/storybook-preset')

const brandingOptions = {
  docs: {
    brandTitle: 'pcln-design-system',
    brandUrl: 'https://github.com/priceline/design-system/packages/core',
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
