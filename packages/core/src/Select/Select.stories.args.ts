import { borderRadii, inputArgs } from '../storybook/args'

export const defaultArgs = {
  disabled: false,
}

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
  disabled: {
    name: 'disabled',
    type: { name: 'boolean' },
    defaultValue: false,
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
