import { borderRadii, inputArgs } from '../storybook/args'

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
  size: {
    name: 'size',
    type: { name: 'string' },
    options: inputArgs,
    description: 'size',
    control: {
      type: 'select',
    },
  },
}
