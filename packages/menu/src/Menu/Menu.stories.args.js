import { storybookArgs } from 'pcln-design-system'

const { colors } = storybookArgs

export const defaultArgs = {
  isOpen: true,
  buttonText: 'Menu',
  openOnFocus: false,
  openOnHover: false,
  trapFocus: false,
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

  placement: {
    name: 'placement',
    type: { name: 'string', required: false },
    description: 'Popover content placement',
    table: {
      defaultValue: { summary: 'bottom-start' },
    },
    control: {
      type: 'select',
      options: [
        'auto',
        'auto-start',
        'auto-end',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'right',
        'right-start',
        'right-end',
        'left',
        'left-start',
        'left-end',
      ],
    },
  },
}
