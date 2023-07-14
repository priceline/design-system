import { colors, fontSizes } from '../storybook/args'

export const defaultArgs = {
  color: 'text.light',
  fontSize: 2,
  type: 'ol',
  listStyle: '',
  indentSize: 'lg',
}

const listStyles = [
  '',
  'disc',
  'upper-roman',
  'lower-roman',
  'upper-alpha',
  'lower-alpha',
  'decimal',
  'square',
  'circle',
]

export const argTypes = {
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

  fontSize: {
    name: 'fontSize',
    type: { name: 'number', required: false },
    description: 'Design System font size',
    table: {
      defaultValue: { summary: 2 },
    },
    control: {
      type: 'select',
      options: fontSizes,
    },
  },

  type: {
    name: 'List Type',
    type: { name: 'Type', details: 'Ordered vs Unordered' },
    description: 'List type',
    control: {
      type: 'select',
      options: ['ol', 'ul'],
    },
  },

  listStyle: {
    name: 'List Style',
    type: { name: 'string', required: false },
    description: 'List style to use',
    options: listStyles,
    control: {
      type: 'select',
    },
  },

  indentSize: {
    name: 'Spacing tab indent',
    type: { name: 'string', required: false },
    description: 'Indent space size to use',
    options: ['', 'xsm', 'sm', 'md', 'lg', 'xl'],
    control: {
      type: 'select',
    },
  },
}
