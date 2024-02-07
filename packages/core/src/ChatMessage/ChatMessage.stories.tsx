import type { StoryObj } from '@storybook/react'
import { Overnight } from 'pcln-icons'
import React from 'react'
import { Flex } from '../Flex/Flex'
import { Text } from '../Text/Text'
import { ChatMessage, ChatMessageVariations, type ChatMessageProps } from './ChatMessage'

export default {
  title: 'Chat / ChatMessage',
  component: ChatMessage,
  args: {
    message: "Hi! I'm Penny, your virtual travel assistant!",
    variation: 'initial',
  },
  argTypes: {
    variation: {
      options: ChatMessageVariations,
      control: {
        type: 'select',
        options: ChatMessageVariations,
      },
    },
  },
}

const HeaderFooter = (
  <Flex alignItems='center' justifyContent='space-between'>
    <Text color='text.light' textStyle='subheading6'>
      Penny
    </Text>
    <Text color='text.light' textStyle='subheading6'>
      12:55 pm
    </Text>
  </Flex>
)

type ChatMessageStory = StoryObj<ChatMessageProps>

export const _ChatMessage: ChatMessageStory = {
  render: (args) => <ChatMessage {...args} />,
}

export const InitialMessage: ChatMessageStory = {
  render: (args) => <ChatMessage {...args} variation='initial' />,
}

export const WithReactNodeMessage: ChatMessageStory = {
  render: (args) => <ChatMessage {...args} variation='initial' message={<div>How can I help you?</div>} />,
}

export const IncomingMessage: ChatMessageStory = {
  render: (args) => <ChatMessage {...args} variation='incoming' />,
}

export const OutgoingMessage: ChatMessageStory = {
  render: (args) => <ChatMessage {...args} variation='outgoing' />,
}

export const WithIconOverride: ChatMessageStory = {
  render: (args) => (
    <ChatMessage {...args} Icon={(props) => <Overnight {...props} title='overnight' />} variation='initial' />
  ),
}

export const WithHeader: ChatMessageStory = {
  render: (args) => <ChatMessage {...args} header={HeaderFooter} variation='incoming' />,
}

export const WithFooter: ChatMessageStory = {
  render: (args) => <ChatMessage {...args} footer={HeaderFooter} variation='incoming' />,
}

export const OutgoingWithFooter: ChatMessageStory = {
  render: (args) => (
    <ChatMessage
      {...args}
      ml='60px'
      variation='outgoing'
      message='hello!!'
      footer={
        <Flex alignItems='center' justifyContent='flex-end'>
          <Text color='text.light' textStyle='subheading6' mr={2}>
            READ
          </Text>
          <Text color='text.light' textStyle='subheading6'>
            12:55 pm
          </Text>
        </Flex>
      }
    />
  ),
}

export const MessageList: ChatMessageStory = {
  render: (args) => (
    <>
      <ChatMessage {...args} variation='initial' mb={3} />
      <ChatMessage {...args} variation='outgoing' mb={1} />
      <ChatMessage {...args} variation='outgoing' />
      <ChatMessage {...args} variation='incoming' mt={3} />
      <ChatMessage {...args} variation='incoming' my={1} />
      <ChatMessage {...args} variation='incoming' />
      <ChatMessage {...args} variation='outgoing' mt={3} mb={1} />
      <ChatMessage {...args} variation='outgoing' />
    </>
  ),
}
