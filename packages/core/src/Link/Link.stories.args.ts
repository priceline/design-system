import { fn } from 'storybook/test'
import { colors } from '../__test__/mocks/colors'

export const sizeOptions = ['small', 'medium', 'large', 'extraLarge']
export const variationOptions = ['fill', 'link', 'outline', 'plain', 'subtle', 'white', 'lightFill', 'input']

export const defaultArgs: Record<string, unknown> = {
  children: 'Hello There',
  color: 'primary',
  disabled: false,
  href: 'https://www.priceline.com/',
  size: 'medium' as const,
  target: '_blank' as const,
  variation: 'link' as const,
  onClick: fn(),
}

export const argTypes = {
  color: {
    options: Object.keys(colors),
    mapping: colors,
    control: 'select' as const,
  },
  size: {
    options: sizeOptions,
    control: 'select' as const,
  },
  target: {
    options: ['_blank', '_self'],
    control: 'radio' as const,
  },
  variation: {
    options: variationOptions,
    control: 'select' as const,
  },
}
