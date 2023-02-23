import { borderRadii, colors, badgeStyles } from '../storybook/args'

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
  badgeStyle: {
    name: 'badgeStyle',
    type: { name: 'string' },
    options: badgeStyles,
    description: 'Semantic badge styles',
    control: {
      type: 'select',
    },
  },
}
