import { ArgTypes } from '@storybook/react/*'
import { borderRadii, colors, objectFits, objectPositions, rounded, shadows } from '../storybook/args'
import { Image } from './Image'

export const argTypes: ArgTypes = {
  borderRadius: {
    control: 'select',
    name: 'borderRadius',
    options: borderRadii,
  },
  rounded: {
    control: 'select',
    options: rounded,
  },
  boxShadowSize: {
    control: 'select',
    options: shadows,
  },
  boxShadowColor: {
    control: 'select',
    options: colors,
    defaultValue: Image.defaultProps.boxShadowColor,
    description: 'Palette family for box shadows',
    table: {
      type: {
        summary: 'Palette color to use for box-shadow - always uses "dark" shade',
      },
    },
  },
  height: {
    control: 'text',
  },
  width: {
    control: 'text',
  },
  objectFit: {
    control: 'select',
    options: objectFits,
  },
  objectPosition: {
    control: 'select',
    options: objectPositions,
  },
}
