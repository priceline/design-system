import React from 'react'
import { InformationOutline } from 'pcln-icons'
import { Box } from '../Box'
import Toast, { IToastProps } from './Toast'
import { argTypes, defaultArgs } from './Toast.stories.args'
import { colorSchemeNames } from '../theme'

export default {
  title: 'Core / Toast',
  component: Toast,
  args: defaultArgs,
  argTypes,
  decorators: [
    (Story) => (
      <Box width={300}>
        <Story />
      </Box>
    ),
  ],
}

const Template = (args: IToastProps) => <Toast {...args} />

export const _Toast = Template.bind({})

const ColorSchemeTemplate = (args) => {
  return colorSchemeNames.map((colorScheme) => (
    <Box m={3} key={colorScheme}>
      <Toast {...args} colorScheme={colorScheme} />
    </Box>
  ))
}

export const _ColorScheme = ColorSchemeTemplate.bind({})
_ColorScheme.args = {
  icon: <InformationOutline />,
}

export const _ColorSchemeBorderVariation = ColorSchemeTemplate.bind({})
_ColorSchemeBorderVariation.args = {
  icon: <InformationOutline />,
  variation: 'border',
}
