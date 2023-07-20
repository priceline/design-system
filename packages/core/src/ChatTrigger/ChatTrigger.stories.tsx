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
  },
  argTypes: {
    onClick: { action: true },
  },
  decorators: [
    (Story) => (
      <Relative width='100%' height='10vh'>
        <Story />
      </Relative>
    ),
  ],
}

export const _ChatTrigger = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole('button'))
    expect(args.onClick).toHaveBeenCalled()
  },
  render: (args) => <ChatTrigger {...args} />,
}

export const FloatingActionButton = {
  render: (args) => <ChatTrigger {...args} />,
}

export const WithNotification = {
  render: (args) => <ChatTrigger {...args} hasNotification />,
}
