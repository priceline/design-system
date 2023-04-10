import React from 'react'
import { Box } from '../Box'
import Toast, { IToastProps } from './Toast'
import { argTypes, defaultArgs } from './Toast.stories.args'

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
