import { borderRadii } from '../../storybook/args'

const boxShadows = ['sm', 'md', 'lg', 'xl']

export const defaultArgs = {
  p: 3,
  m: 0,
  color: 'primary',
  height: '300px',
  width: '300px',
  borderRadius: 'full',
}

export const argTypes = {
  children: { table: { disable: true } },
  p: { table: { disable: true } },
  m: { table: { disable: true } },
  color: { table: { disable: true } },

  borderRadius: {
    name: 'borderRadius',
    type: { name: 'string', required: false },
    options: borderRadii,
    description: 'borderRadius',
    table: {
      type: {
        summary: 'Border Radius',
        detail: '- ' + borderRadii.join('\n- '),
      },
      defaultValue: { summary: 'none' },
    },
    control: {
      type: 'select',
    },
  },

  boxShadowSize: {
    name: 'boxShadowSize',
    type: { name: 'string', required: false },
    options: boxShadows,
    description: 'Size of the box shadow',
    table: {
      defaultValue: { summary: null },
    },
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
}
