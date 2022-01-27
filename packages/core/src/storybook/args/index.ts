import {
  borderRadiusValues,
  boxShadowSizeValues,
  paletteFamilies,
  roundedValues,
  textStylesValues,
} from '../../utils'

export const colors = ['', ...paletteFamilies, 'NOTVALID']

export const borderRadii = ['', ...borderRadiusValues, 'NOTVALID']

export const rounded = ['', ...roundedValues, 'NOTVALID']

export const shadows = ['', ...boxShadowSizeValues, 'NOTVALID']

export const textStyles = ['', ...textStylesValues, 'NOTVALID']

export const spaceArgs = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
].reduce((acc, prop) => {
  acc[prop] = {
    name: prop,
    type: { name: 'string' },
    description: prop,
    table: {
      disable: true,
    },
  }

  return acc
}, {})

export const fontSizes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
