import type { ArgTypes } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { colors } from '../__test__/mocks/colors'
import { LabelProps } from './Label'

const actions = {
  noAction: null,
  basicAction: fn(),
}

export const defaultArgs = {
  children: 'Label Children Long Message That Could Truncate',
  hidden: false,
  nowrap: false,
  truncate: false,
  width: 'auto',
}

export const argTypes: Partial<ArgTypes<LabelProps>> = {
  color: {
    name: 'color',
    options: Object.keys(colors),
    mapping: colors,
    control: 'select',
  },
  fontSize: {
    name: 'fontSize',
    options: [0, 1, 2, 3, 4, 5, 6],
    control: 'select',
  },
  hidden: {
    name: 'hidden',
    control: 'boolean',
  },
  nowrap: {
    name: 'nowrap',
    control: 'boolean',
  },
  truncate: {
    name: 'truncate',
    control: 'boolean',
  },
  width: {
    name: 'width',
    options: [0.5, '20px', 'auto'],
    control: 'radio',
  },
  onClick: {
    name: 'onClick',
    options: Object.keys(actions),
    mapping: actions,
    control: 'radio',
  },
}
