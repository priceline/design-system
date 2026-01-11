import { colors, borderRadii, rounded, shadows } from '../storybook/args'

export const defaultArgs = {
  height: '300px',
  width: '300px',
}

export const argTypes = {
  color: {
    options: colors,
    description: 'Palette color to use',
    control: 'select' as const,
  },

  borderRadius: {
    options: borderRadii,
    description: 'borderRadius',
    control: 'select' as const,
  },

  rounded: {
    options: rounded,
    description: 'rounded',
    control: 'select' as const,
  },

  boxShadowSize: {
    options: shadows,
    description: 'Size of the box shadow',
    control: 'select' as const,
  },

  boxShadowColor: {
    options: colors,
    description: 'Palette family for box shadows',
    table: {
      type: {
        summary: 'Palette color to use for box-shadow - always uses "dark" shade',
      },
    },
    control: 'select' as const,
  },

  height: {
    description: 'height',
  },
  width: {
    description: 'width',
  },
}
