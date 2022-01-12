import { textStyles } from '../../storybook/args'

export const defaultArgs = {}

export const argTypes = {
  textStyle: {
    name: 'textStyle',
    type: { name: 'string' },
    options: textStyles,
    description: 'curated text display properties',
    control: {
      type: 'select',
    },
  },
}
