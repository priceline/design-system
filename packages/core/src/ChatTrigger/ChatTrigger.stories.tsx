import React from 'react'
import ChatTrigger from './ChatTrigger'
import { Relative } from '../Relative'

export default {
  title: 'Chat / ChatTrigger',
  component: ChatTrigger,
  args: {
    hasNotification: false,
  },
  argTypes: {
    onClick: { action: true },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Relative width='100%' height='10vh'>
        <Story />
      </Relative>
    ),
  ],
}

export const _ChatTrigger = {
  render: (args) => <ChatTrigger {...args} />,
}

export const FloatingActionButton = {
  render: (args) => <ChatTrigger {...args} />,
}

export const WithNotification = {
  render: (args) => <ChatTrigger {...args} hasNotification />,
}

export const Banner = {}

export const Trigger = {}
