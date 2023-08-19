import { ArgTypes } from '@storybook/react'
import type { ICloseButtonProps } from '.'
import { paletteColors, shadows } from '..'
import { closeButtonSizes, closeButtonVariants } from './CloseButton.styled'

export const argTypes: Partial<ArgTypes<ICloseButtonProps>> = {
  animate: { control: { type: 'boolean' } },
  bgColor: { control: { type: 'select' }, options: paletteColors },
  boxShadowSize: { control: { type: 'select' }, options: Object.keys(shadows) },
  color: { control: { type: 'select' }, options: paletteColors },
  size: { control: { type: 'select' }, options: closeButtonSizes },
  variant: { control: { type: 'select' }, options: closeButtonVariants },

  padding: { control: { type: 'number' } },
  margin: { control: { type: 'number' } },
  onClick: { action: 'clicked' },
}

export const defaultArgs: Partial<ICloseButtonProps> = {
  size: 'md',
  title: 'close',
  animate: true,
}
