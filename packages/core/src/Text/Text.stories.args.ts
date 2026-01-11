import { textStyles } from '../storybook/args'

export const defaultArgs = {}

export const argTypes = {
  textStyle: {
    name: 'textStyle',
    options: textStyles,
    description: 'curated text display properties',
    control: 'select' as const,
  },
}
