import React from 'react'
import type { StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Flex, Text } from '..'
import { Overnight } from 'pcln-icons'
import ChatMessage, { IChatMessage } from './ChatMessage'

const variations = ['initial', 'incoming', 'outgoing']

export default {
  title: 'Chat / ChatMessage',
  component: ChatMessage,
  args: {
    message: "Hi! I'm Penny, your virtual travel assistant!",
    variation: 'initial',
  },
  argTypes: {
    variation: {
      options: variations,
      control: {
        type: 'select',
        options: variations,
      },
    },
  },
  tags: ['autodocs'],
}

const HeaderFooter = (
  <Flex alignItems='center' justifyContent='space-between'>
    <Text color='text.light' textStyle='subheading6'>
      PennyTM
    </Text>
    <Text color='text.light' textStyle='subheading6'>
      12:55 pm
    </Text>
  </Flex>
)

type ChatMessageStory = StoryObj<IChatMessage>

export const _ChatMessage: ChatMessageStory = {
  render: (args) => <ChatMessage {...args} />,
}

export const InitialMessage: ChatMessageStory = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const text = canvas.getByText("Hi! I'm Penny, your virtual travel assistant!")
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle('color: rgb(0, 24, 51)')

    const message = text.parentNode
    expect(message).toHaveStyle('background-color: rgb(244, 246, 248)')
    expect(message).toHaveStyle('color: rgb(0, 24, 51)')
    expect(message).toHaveStyle('border-radius: 16px')
    expect(message).toHaveStyle('justify-content: flex-start')

    const icon = canvas.getByTestId('chat-message-icon')
    expect(icon).toBeInTheDocument()
  },
  render: (args) => <ChatMessage {...args} variation='initial' />,
}

export const IncomingMessage: ChatMessageStory = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const text = canvas.getByText("Hi! I'm Penny, your virtual travel assistant!")
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle('color: rgb(0, 24, 51)')

    const message = text.parentNode
    expect(message).toHaveStyle('background-color: rgb(244, 246, 248)')
    expect(message).toHaveStyle('color: rgb(0, 24, 51)')
    expect(message).toHaveStyle('border-top-left-radius: 4px')
    expect(message).toHaveStyle('justify-content: flex-start')

    const icon = canvas.queryByTestId('chat-message-icon')
    expect(icon).not.toBeInTheDocument()
  },
  render: (args) => <ChatMessage {...args} variation='incoming' />,
}

export const OutgoingMessage: ChatMessageStory = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const text = canvas.getByText("Hi! I'm Penny, your virtual travel assistant!")
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle('color: rgb(255, 255, 255)')

    const message = text.parentNode
    expect(message).toHaveStyle('background-color: rgb(0, 104, 239)')
    expect(message).toHaveStyle('color: rgb(255, 255, 255)')
    expect(message).toHaveStyle('border-top-right-radius: 4px')
    expect(message).toHaveStyle('justify-content: flex-end')

    const icon = canvas.queryByTestId('chat-message-icon')
    expect(icon).not.toBeInTheDocument()
  },
  render: (args) => <ChatMessage {...args} variation='outgoing' />,
}

export const WithIconOverride: ChatMessageStory = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const icon = canvas.getAllByTitle('overnight')[0]
    expect(icon).toBeInTheDocument()
  },
  render: (args) => (
    <ChatMessage {...args} Icon={(props) => <Overnight {...props} title='overnight' />} variation='initial' />
  ),
}

export const WithHeader: ChatMessageStory = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    expect(canvas.getByText('PennyTM')).toBeInTheDocument()
    expect(canvas.getByText('12:55 pm')).toBeInTheDocument()
  },
  render: (args) => <ChatMessage {...args} header={HeaderFooter} variation='incoming' />,
}

export const WithFooter: ChatMessageStory = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    expect(canvas.getByText('PennyTM')).toBeInTheDocument()
    expect(canvas.getByText('12:55 pm')).toBeInTheDocument()
  },
  render: (args) => <ChatMessage {...args} footer={HeaderFooter} variation='incoming' />,
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
