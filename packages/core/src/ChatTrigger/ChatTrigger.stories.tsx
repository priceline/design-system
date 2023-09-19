import React from 'react'
import { expect } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'
import ChatTrigger from './ChatTrigger'
import { Relative } from '../Relative'

export default {
  title: 'Chat / ChatTrigger',
  component: ChatTrigger,
  args: {
    hasNotification: false,
    tooltip: 'Chat with Penny',
  },
  argTypes: {
    onClick: { action: true },
  },
  decorators: [
    (Story) => (
      <Relative width='100%' height='25vh'>
        <Story />
      </Relative>
    ),
  ],
}

export const _ChatTrigger = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole('button')
    await expect(canvas.queryByText('Chat with Penny')).not.toBeInTheDocument()
    await userEvent.hover(button)
    await expect(canvas.getByText('Chat with Penny')).toBeInTheDocument()
    await userEvent.unhover(button)
    await expect(canvas.queryByText('Chat with Penny')).not.toBeInTheDocument()

    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalled()
  },
  render: (args) => <ChatTrigger {...args} />,
}

export const FloatingActionButton = {
  render: (args) => <ChatTrigger {...args} />,
}

export const WithNotification = {
  render: (args) => <ChatTrigger {...args} hasNotification />,
}
