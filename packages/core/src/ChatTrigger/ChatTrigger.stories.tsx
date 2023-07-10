import React from 'react'
import ChatTrigger from './ChatTrigger'

export default {
  title: 'Chat / ChatTrigger',
  component: ChatTrigger,
  args: {
    hasNotification: false,
  },
  tags: ['autodocs'],
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
