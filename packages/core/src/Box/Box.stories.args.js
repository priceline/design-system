import React from 'react'

import { Text } from '..'

import { colors, borderRadii, rounded } from '../../storybook/args'

const boxShadows = ['sm', 'md', 'lg', 'xl']

export const defaultArgs = {
  p: 3,
  m: 0,
  children: <Text>Hello!</Text>,
}

export const argTypes = {
  children: { table: { disable: true } },

  color: {
    name: 'color',
    type: { name: 'string', required: false },
    options: colors,
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
    },
  },

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

  rounded: {
    name: 'rounded',
    type: { name: 'string', required: false },
    options: rounded,
    description: 'rounded',
    table: {
      type: {
        summary: 'Rounded',
        detail: '- ' + rounded.join('\n- '),
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

  size: {
    name: 'size',
    type: { name: 'string', required: false },
    description: 'size',
    table: {
      defaultValue: { summary: undefined },
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

  minHeight: {
    name: 'minHeight',
    type: { name: 'string', required: false },
    description: 'minHeight',
    table: {
      defaultValue: { summary: undefined },
    },
  },
  minWidth: {
    name: 'minWidth',
    type: { name: 'string', required: false },
    description: 'minWidth',
    table: {
      defaultValue: { summary: undefined },
    },
  },

  maxHeight: {
    name: 'maxHeight',
    type: { name: 'string', required: false },
    description: 'maxHeight',
    table: {
      defaultValue: { summary: undefined },
    },
  },
  maxWidth: {
    name: 'maxWidth',
    type: { name: 'string', required: false },
    description: 'maxWidth',
    table: {
      defaultValue: { summary: undefined },
    },
  },
}
