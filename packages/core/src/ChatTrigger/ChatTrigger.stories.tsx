import { expect } from '@storybook/jest'
import { userEvent, within } from '@storybook/testing-library'
import { fn } from '@storybook/test'
import React from 'react'
import { Relative } from '../Relative/Relative'
import { ChatTrigger } from './ChatTrigger'
import { Meta } from '@storybook/react/*'

const meta: Meta<typeof ChatTrigger> = {
  title: 'Chat / ChatTrigger',
  component: ChatTrigger,
  args: {
    hasNotification: false,
    tooltip: 'Chat with Penny',
    onClick: fn(),
  },
  decorators: [
    (Story) => (
      <Relative width='100%' height='25vh'>
        <Story />
      </Relative>
    ),
  ],
}

export default meta

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
