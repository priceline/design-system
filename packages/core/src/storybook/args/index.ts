import {
  borderRadiusValues,
  boxShadowSizeValues,
  paletteFamilies,
  roundedValues,
  textStylesValues,
  objectFitValues,
  objectPositionValues,
} from '../../utils'
import { zIndices, colorSchemeNames as colorSchemeNamesArr } from '../../theme'

export const colorSchemeNames = colorSchemeNamesArr

export const colors = ['', ...paletteFamilies, 'NOTVALID']

export const borderRadii = ['', ...borderRadiusValues, 'NOTVALID']

export const borderStyles = [
  'none',
  'hidden',
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
  'initial',
  'inherit',
]

export const rounded = ['', ...roundedValues, 'NOTVALID']

export const shadows = ['', ...boxShadowSizeValues, 'NOTVALID']

export const textStyles = ['', ...textStylesValues, 'NOTVALID']

export const inputArgs = ['sm', 'md', 'lg', 'xl']

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
export const objectFits = ['', ...objectFitValues, 'NOTVALID']
export const objectPositions = ['', ...objectPositionValues, 'NOTVALID']
export const zIndicies = zIndices
export const chipWithShadowVariationArgs = [
  { label: 'Enabled', variation: 'shadow'},
  { label: 'Selected', selected: true, variation: 'shadow'},
  { label: 'Disabled', disabled: true, variation: 'shadow'},
  { label: 'Selected Disabled', disabled: true, selected: true, variation: 'shadow'},
]