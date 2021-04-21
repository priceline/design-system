import React from 'react'
import { colors } from '../../storybook/args'
import { Cars, Hotels, Flights } from 'pcln-icons'

export const iconMap = {
  Cars: <Cars />,
  Hotels: <Hotels />,
  Flights: <Flights />,
}

export const sizes = ['small', 'medium', 'large', '200px']
export const icons = ['Cars', 'Hotels', 'Flights']

export const defaultArgs = {
  size: 'medium',
  color: 'primary',
}

export const argTypes = {
  size: {
    name: 'size',
    type: { name: 'string', required: false },
    description:
      'Spinner size to render\nAccepts string or responsive array of strings.',
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

  icon: {
    name: 'icon',
    type: { name: 'string', required: false },
    description: 'Icon to use',
    table: {
      type: {
        summary: 'Icons',
        detail: '- ' + icons.join('\n- '),
      },
      defaultValue: { summary: 'Cars' },
    },
    control: {
      type: 'select',
      options: icons,
    },
  },
}
