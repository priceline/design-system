import { colors } from '../../storybook/args'

export const sizes = ['small', 'medium', 'large', 100]

export const speed = ['slow', 'medium', 'fast', 0.25]

export const defaultArgs = {
  size: 'medium',
  speed: 'medium',
  color: 'background',
}

export const argTypes = {
  size: {
    name: 'size',
    type: { name: 'string', required: false },
    description:
      'DotLoader size to render\nAccepts string or responsive array of strings.',
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

  speed: {
    name: 'speed',
    type: { name: 'string', required: false },
    description:
      'Button size to render\nAccepts string or responsive array of strings.',
    table: {
      type: {
        summary: 'Speeds',
        detail: '- ' + speed.join('\n- '),
      },
      defaultValue: { summary: 'medium' },
    },
    control: {
      type: 'select',
      options: speed,
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
      defaultValue: { summary: 'background' },
    },
    control: {
      type: 'select',
      options: colors,
    },
  },
}
