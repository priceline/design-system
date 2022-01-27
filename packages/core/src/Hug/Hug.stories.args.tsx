import React from 'react'
import { Accessible, SeatBusiness, ThumbsUp, Trophy, WashingHands } from 'pcln-icons'

import { Text } from '..'

import { colors, borderRadii } from '../storybook/args'

export const iconMap = {
  Accessible,
  SeatBusiness,
  ThumbsUp,
  Trophy,
  WashingHands,
}

export const HugContentText = () => (
  <Text.span>
    Today&apos;s best deal! You save <Text.span fontWeight='bold'>$300</Text.span> for your party of 2.&nbsp;
  </Text.span>
)

export const defaultArgs = {
  color: 'primary',
  text: <HugContentText />,
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

  icon: {
    name: 'icon',
    description: 'Icon to use inside the Hug',
    table: {
      defaultValue: { summary: null },
    },
    control: {
      type: 'select',
      options: Object.keys(iconMap),
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
}
