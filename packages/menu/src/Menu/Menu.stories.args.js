import { colors } from '../../../core/storybook/args'

export const defaultArgs = {
  isOpen: true,
  buttonText: 'Menu',
}

export const argTypes = {
  id: {
    name: 'id',
    type: { name: 'string', required: false },
    description: 'DOM id',
    table: {
      defaultValue: { summary: undefined },
    },
  },
  isOpen: {
    name: 'isOpen',
    type: { name: 'boolean', required: false },
    description: 'Is the menu open?',
    table: {
      defaultValue: { summary: true },
    },
    control: {
      type: 'boolean',
    },
  },

  buttonText: {
    name: 'buttonText',
    type: { name: 'string', required: false },
    description: 'text on Button trigger',
    table: {
      defaultValue: { summary: undefined },
    },
  },

  height: {
    name: 'height',
    type: { name: 'string', required: false },
    description: 'height of open menu',
    table: {
      defaultValue: { summary: undefined },
    },
  },
  width: {
    name: 'width',
    type: { name: 'string', required: false },
    description: 'width of open menu',
    table: {
      defaultValue: { summary: undefined },
    },
  },

  color: {
    name: 'color',
    type: { name: 'string', required: false },
    description: 'Palette color to use',
    table: {
      type: {
        summary: 'Colors',
        detail: '- ' + colors.join('\n- '),
      },
      defaultValue: { summary: 'primary' },
    },
    control: {
      type: 'select',
      options: colors,
    },
  },

  size: {
    name: 'size',
    type: { name: 'string', required: false },
    description: 'Column layout',
    table: {
      defaultValue: { summary: 'singleColumn' },
    },
    control: {
      type: 'select',
      options: ['singleColumn', 'twoColumns'],
    },
  },
}
