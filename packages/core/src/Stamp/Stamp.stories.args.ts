import { borderRadii } from '../storybook/args'

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
  variation: {
    type: { name: 'string' },
    options: ['fill', 'outline', 'solid'],
    control: { type: 'select' },
  },
}
