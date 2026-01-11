import { borderRadii, rounded } from '../storybook/args'
import { backgroundPositionList } from './BackgroundImage'

const variations = ['static', 'parallax']
const image =
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4'

export const defaultArgs = {
  height: '320px',
  image,
  variation: 'static' as const,
}

export const argTypes = {
  variation: {
    description: 'Control attachment mode of background',
    table: {
      type: {
        summary: 'Variations',
        detail: '- ' + variations.join('\n- '),
      },
      defaultValue: { summary: 'fill' },
    },
    control: 'select' as const,
    options: variations,
  },

  borderRadius: {
    options: borderRadii,
    description: 'borderRadius',
    control: 'select' as const,
  },

  rounded: {
    options: rounded,
    description: 'rounded',
    control: 'select' as const,
  },

  height: {
    description: 'height',
    table: {
      defaultValue: { summary: undefined },
    },
  },
  width: {
    description: 'width',
    table: {
      defaultValue: { summary: undefined },
    },
  },

  image: {
    description: 'url of background image',
    table: {
      defaultValue: { summary: undefined },
    },
  },

  backgroundPosition: {
    description: 'background position',
    options: backgroundPositionList,
    control: 'select' as const,
    table: {
      defaultValue: { summary: 'center' },
    },
  },
}
