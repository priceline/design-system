import { decorators as pclnDecorators, parameters as pclnParameters } from '@priceline/storybook-preset'

const brandingOptions = {
  docs: {
    brandTitle: 'pcln-design-system',
    brandUrl: 'https://github.com/priceline/design-system/packages/core',
  },
}
export const parameters = {
  ...pclnParameters,
  options: {
    ...pclnParameters.options,
    ...brandingOptions,
  },
}

export const decorators = [...pclnDecorators]
