import { action } from '@storybook/addon-actions'
import { colors } from '../__test__/mocks/colors'

export const sizeOptions = ['small', 'medium', 'large', 'extraLarge']
export const variationOptions = ['fill', 'link', 'outline', 'plain', 'subtle', 'white', 'lightFill', 'input']

export const defaultArgs = {
  children: 'Hello There',
  color: 'primary',
  disabled: false,
  href: 'https://www.priceline.com/',
  size: 'medium',
  target: '_blank',
  variation: 'link',
  onClick: action('Clicked Link'),
}

export const argTypes = {
  color: {
    name: 'color',
    options: Object.keys(colors),
    mapping: colors,
    control: 'select',
  },
  size: {
    name: 'size',
    options: sizeOptions,
    control: 'select',
  },
  target: {
    name: 'target',
    options: ['_blank', '_self'],
    control: 'radio',
  },
  variation: {
    name: 'variation',
    options: variationOptions,
    control: 'select',
  },
}
