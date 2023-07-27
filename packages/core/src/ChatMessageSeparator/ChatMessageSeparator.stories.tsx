import React from 'react'
import ChatMessageSeparator from './ChatMessageSeparator'

export default {
  title: 'Chat / ChatMessageSeparator',
  component: ChatMessageSeparator,
  args: {
    message: '',
  },
}

export const _ChatMessageSeparator = {
  render: (args) => <ChatMessageSeparator {...args} />,
}

export const WithMessage = {
  render: (args) => <ChatMessageSeparator {...args} message='July 1st, 2023, 12:55 PM' />,
}
