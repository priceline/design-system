import { colors } from '../../../core/storybook/args'

export const defaultArgs = {
  color: 'primary',
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

  handleClose: {
    name: 'handleClose',
    type: { name: 'function', required: false },
    description: 'Handle close',
    table: {
      defaultValue: { summary: undefined },
    },
    action: 'handleClose from <MenuItem>',
  },

  onClick: {
    name: 'onClick',
    type: { name: 'function', required: false },
    description: 'handle click events',
    table: {
      defaultValue: { summary: undefined },
    },
    action: 'onClick from <MenuItem>',
  },
}
