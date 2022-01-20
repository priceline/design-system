import { storybookArgs } from 'pcln-design-system'

const { colors } = storybookArgs

export const defaultArgs = {
  size: 'singleColumn',
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

  height: {
    name: 'height',
    type: { name: 'string', required: false },
    description: 'height of open menu',
    table: {
      defaultValue: { summary: undefined },
    },
  },

  handleClose: {
    name: 'handleClose',
    type: { name: 'function', required: false },
    description: 'Handle close',
    table: {
      defaultValue: { summary: undefined },
    },
    action: 'handleClose from <MenuList>',
  },
}
