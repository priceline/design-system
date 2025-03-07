import { borderStyles, colors, inputArgs, shadows } from '../storybook/args'

export const argTypes: unknown = {
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
    defaultValue: 'border',
  },
  borderRadius: {
    control: 'select',
    options: inputArgs,
    defaultValue: 'xsm',
  },
  borderStyle: {
    control: 'select',
    options: borderStyles,
    defaultValue: 'solid',
  },
  borderWidth: {
    control: { type: 'number', min: 0, max: 5, step: 1 },
    defaultValue: 1,
  },
  boxShadowSize: {
    control: 'select',
    options: shadows,
    defaultValue: 'md',
  },
}
