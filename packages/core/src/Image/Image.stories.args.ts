import { colors, borderRadii, rounded, shadows, objectFits, objectPositions } from '../storybook/args'
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

  rounded: {
    name: 'rounded',
    type: { name: 'string' },
    options: rounded,
    description: 'rounded',
    control: {
      type: 'select',
    },
  },

  boxShadowSize: {
    name: 'boxShadowSize',
    type: { name: 'string' },
    options: shadows,
    description: 'Size of the box shadow',
    control: {
      type: 'select',
    },
  },

  boxShadowColor: {
    name: 'boxShadowColor',
    type: { name: 'string' },
    options: colors,
    description: 'Palette family for box shadows',
    table: {
      type: {
        summary: 'Palette color to use for box-shadow - always uses "dark" shade',
      },
    },
    control: {
      type: 'select',
    },
  },

  height: {
    name: 'height',
    type: { name: 'string' },
    description: 'height',
  },
  width: {
    name: 'width',
    type: { name: 'string' },
    description: 'width',
  },
  objectFit: {
    name: 'objectFit',
    type: { name: 'string' },
    options: objectFits,
    description: 'How img is resized to fit its container',
    control: {
      type: 'select',
    },
  },
  objectPosition: {
    name: 'objectPosition',
    type: { name: 'string' },
    options: objectPositions,
    description: 'How img is aligned within its container',
    control: {
      type: 'select',
    },
  },
}
