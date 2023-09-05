import React from 'react'
import type { StoryObj } from '@storybook/react'
import { expect, jest } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'
import ChatActionContainer, { IChatActionContainer } from './ChatActionContainer'

export default {
  title: 'Chat / ChatActionContainer',
  component: ChatActionContainer,
}

type ChatActionContainerStory = StoryObj<IChatActionContainer>

const twoChatActions = [
  {
    label: 'Yes',
    onClick: jest.fn(),
  },
  {
    label: 'No',
    onClick: jest.fn(),
  },
]

const threeChatActions = [
  {
    label: 'Send a copy of my itinerary',
    onClick: jest.fn(),
  },
  {
    label: 'Cancel my Trip',
    onClick: jest.fn(),
  },
  {
    label: 'Reset my Password',
    onClick: jest.fn(),
  },
]

export const _TwoChatActions: ChatActionContainerStory = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Yes')).toBeInTheDocument()
    await expect(canvas.getByText('No')).toBeInTheDocument()

    await userEvent.click(canvas.getAllByRole('button')[0])
    await expect(twoChatActions[0].onClick).toHaveBeenCalled()

    await userEvent.click(canvas.getAllByRole('button')[1])
    await expect(twoChatActions[1].onClick).toHaveBeenCalled()
  },
  render: (args) => <ChatActionContainer chatActions={twoChatActions} {...args} />,
}

export const _ThreeChatActions: ChatActionContainerStory = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Send a copy of my itinerary')).toBeInTheDocument()
    await expect(canvas.getByText('Cancel my Trip')).toBeInTheDocument()
    await expect(canvas.getByText('Reset my Password')).toBeInTheDocument()

    await userEvent.click(canvas.getAllByRole('button')[0])
    await expect(threeChatActions[0].onClick).toHaveBeenCalled()

    await userEvent.click(canvas.getAllByRole('button')[1])
    await expect(threeChatActions[1].onClick).toHaveBeenCalled()

    await userEvent.click(canvas.getAllByRole('button')[2])
    await expect(threeChatActions[2].onClick).toHaveBeenCalled()
  },
  render: (args) => <ChatActionContainer chatActions={threeChatActions} {...args} />,
}
