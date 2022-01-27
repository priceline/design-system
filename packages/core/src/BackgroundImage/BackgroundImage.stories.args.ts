import { borderRadii, rounded } from '../storybook/args'

const variations = ['static', 'parallax']
const image =
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4'

export const defaultArgs = {
  height: '320px',
  image,
  variation: 'static',
}

export const argTypes = {
  variation: {
    name: 'variation',
    type: { name: 'string', required: false },
    description: 'Control attachment mode of background',
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

  borderRadius: {
    name: 'borderRadius',
    type: { name: 'string' },
    options: borderRadii,
    description: 'borderRadius',
    control: {
      type: 'select',
    },
  },

  rounded: {
    name: 'rounded',
    type: { name: 'string' },
    options: rounded,
    description: 'rounded',
    control: {
      type: 'select',
    },
  },

  height: {
    name: 'height',
    type: { name: 'string', required: false },
    description: 'height',
    table: {
      defaultValue: { summary: undefined },
    },
  },
  width: {
    name: 'width',
    type: { name: 'string', required: false },
    description: 'width',
    table: {
      defaultValue: { summary: undefined },
    },
  },

  image: {
    name: 'image',
    type: { name: 'string', required: false },
    description: 'url of background image',
    table: {
      defaultValue: { summary: undefined },
    },
  },
}
