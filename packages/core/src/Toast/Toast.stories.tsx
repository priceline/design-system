import React from 'react'
import { Box } from '../Box'
import Toast, { IToastProps } from './Toast'

export default {
  title: 'Core / Toast',
  component: Toast,
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
