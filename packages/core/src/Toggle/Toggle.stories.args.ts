import { ArgTypes } from '@storybook/react'
import type { IToggleProps } from '..'

export const toggleArgTypes: Partial<ArgTypes<IToggleProps>> = {
  isOn: {
    type: 'boolean',
  },
  disabled: {
    type: 'boolean',
    defaultValue: false,
  },
  height: {
    type: 'number',
  },
}
