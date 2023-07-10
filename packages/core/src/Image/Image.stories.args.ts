import { colors, borderRadii, rounded, shadows, objectFits, objectPositions } from '../storybook/args'
import Image from './Image'

export const argTypes = {
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
