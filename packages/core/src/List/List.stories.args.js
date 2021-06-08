import { colors, fontSizes } from '../../storybook/args'

export const defaultArgs = {
  color: 'text.light',
  fontSize: 2,
  type: 'ol',
}

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
    description: 'List Type',
    control: {
      type: 'select',
      options: ['ol', 'ul'],
    },
  },
}
