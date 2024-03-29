import type { StoryObj } from '@storybook/react'
import React from 'react'
import { Box } from '../Box/Box'
import { ChatMessageContainer, type ChatMessageContainerProps } from './ChatMessageContainer'
import { longConversation, shortConversation } from './ChatMessageContainer.stories.args'

export default {
  title: 'Chat / ChatMessageContainer',
  component: ChatMessageContainer,
  args: {
    messageMaxWidth: '90%',
  },
}

type ChatMessageContainerStory = StoryObj<ChatMessageContainerProps>

export const _ChatMessageContainer: ChatMessageContainerStory = {
  render: (args) => <ChatMessageContainer {...args} messages={shortConversation} />,
}

export const LongConversation: ChatMessageContainerStory = {
  render: (args) => (
    <Box height='400px'>
      <ChatMessageContainer {...args} messages={longConversation} />
    </Box>
  ),
}

export const Empty: ChatMessageContainerStory = {
  render: (args) => <ChatMessageContainer {...args} />,
}

export const CustomMessageMaxWidth: ChatMessageContainerStory = {
  render: (args) => <ChatMessageContainer {...args} messages={shortConversation} messageMaxWidth='60%' />,
}
