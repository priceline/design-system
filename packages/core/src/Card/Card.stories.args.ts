import { colors, inputArgs, shadows } from '../storybook/args'
import { Card } from '..'

export const argTypes = {
  as: {
    control: 'select',
    description:
      'Alter the base render component. Here we can have the Card be rendered on the DOM as a `button` for accessibility. It grants the ability to tab and focus the element',
    options: ['', 'button'],
  },
  bg: {
    control: 'select',
    options: colors,
  },
  borderColor: {
    control: 'select',
    options: colors,
    defaultValue: Card.defaultProps.borderColor,
  },
  borderRadius: {
    control: 'select',
    options: inputArgs,
    defaultValue: Card.defaultProps.borderRadius,
  },
  borderWidth: {
    control: { type: 'number', min: 0, max: 5, step: 1 },
    defaultValue: Card.defaultProps.borderWidth,
  },
  boxShadowSize: {
    control: 'select',
    options: shadows,
    defaultValue: 'md',
  },
}
