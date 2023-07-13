import { borderRadii, colors } from '../storybook/args'
import { textTransformValues } from '../utils'

export const argTypes = {
  borderRadius: {
    name: 'borderRadius',
    type: { name: 'string' },
    options: borderRadii,
    description: 'borderRadius',
    control: {
      type: 'select',
    },
  },
  bg: {
    name: 'bg',
    type: { name: 'string' },
    options: colors,
    description: 'Color of badge background',
    control: {
      type: 'select',
    },
  },
  color: {
    name: 'color',
    type: { name: 'string' },
    options: colors,
    description: 'Color of badge',
    control: {
      type: 'select',
    },
  },
  textTransform: {
    name: 'text transform',
    type: { name: 'string' },
    options: textTransformValues,
    description: 'Text transform of Badge',
    control: {
      type: 'select',
    },
  },
}
