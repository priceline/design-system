import { colors, shadows } from '../storybook/args'
import { borderRadiusButtonValues } from './Button'
export const variations = ['fill', 'link', 'outline', 'plain', 'subtle', 'lightFill', 'white']
export const sizes = ['small', 'medium', 'large']

export const argTypes = {
  variation: {
    name: 'variation',
    type: { name: 'string', required: false },
    description: 'Display variation to render',
    table: {
      type: {
        summary: 'Variations',
        detail: '- ' + variations.join('\n- '),
      },
      defaultValue: { summary: 'fill' },
    },
    control: {
      type: 'select',
      options: variations,
    },
  },

  size: {
    name: 'size',
    type: { name: 'string', required: false },
    description: 'Button size to render\nAccepts string or responsive array of strings.',
    table: {
      type: {
        summary: 'Sizes',
        detail: '- ' + sizes.join('\n- '),
      },
      defaultValue: { summary: 'medium' },
    },
    control: {
      type: 'select',
      options: sizes,
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

  width: {
    name: 'width',
    type: { name: 'string', required: false },
    description: 'Button width',
    table: {
      defaultValue: { summary: undefined },
    },
  },

  space: {
    name: 'space',
    type: { name: 'string', required: false },
    description: 'styled-system `space`',
    table: {
      defaultValue: { summary: undefined },
    },
  },

  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    description: 'Is the control disabled?',
    table: {
      defaultValue: { summary: 'false' },
    },
    control: {
      type: 'boolean',
    },
  },

  onClick: {
    name: 'onClick',
    type: { name: 'function', required: false },
    description: 'Event handler for `click`',
    table: {
      defaultValue: { summary: undefined },
    },
    action: 'Clicked on <Button>',
  },

  borderRadius: {
    name: 'borderRadius',
    type: { name: 'string', required: false },
    description: 'design-system `borderRadius`',
    table: {
      type: {
        summary: 'Border radius size',
        detail: '- ' + [...borderRadiusButtonValues, 'NOT VALID'].join('\n- '),
      },
      defaultValue: { summary: 'none' },
    },
    control: {
      type: 'select',
      options: [...borderRadiusButtonValues, 'NOT VALID'],
    },
  },

  boxShadowSize: {
    name: 'boxShadowSize',
    type: { name: 'string', required: false },
    description: 'design-system `boxShadowSize`',
    table: {
      type: {
        summary: 'Box shadow size',
        detail: '- ' + shadows.join('\n- '),
      },
      defaultValue: { summary: 'none' },
    },
    control: {
      type: 'select',
      options: shadows,
    },
  },
}
