import { expect } from '@storybook/jest'
import type { StoryObj, Meta } from '@storybook/react/&*'
import { userEvent, within } from '@storybook/testing-library'
import { fn } from '@storybook/test'
import { Sparkle } from 'pcln-icons'
import React from 'react'
import { Flex } from '../Flex/Flex'
import { Stamp } from '../Stamp/Stamp'
import { Text } from '../Text/Text'
import { ChatHeader, type ChatHeaderProps } from './ChatHeader'

const meta: Meta<typeof ChatHeader> = {
  title: 'Chat / ChatHeader',
  component: ChatHeader,
  args: {
    onClose: fn(),
    onMinimize: fn(),
  },
}

export default meta

type ChatHeaderStory = StoryObj<ChatHeaderProps>

const Children = (
  <Flex alignItems='center'>
    <Text color='text.heading' textStyle='heading5'>
      Penny
      <Sparkle color='promoPrimary' size='16px' />
    </Text>
    <Stamp color='primary' mx={2}>
      Beta
    </Stamp>
  </Flex>
)

export const _ChatHeaderWithMinimize: ChatHeaderStory = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Penny')).toBeInTheDocument()

    await userEvent.click(canvas.getAllByRole('button')[0])
    await expect(args.onMinimize).toHaveBeenCalled()

    await userEvent.click(canvas.getAllByRole('button')[1])
    await expect(args.onClose).toHaveBeenCalled()
  },
  render: (args) => <ChatHeader {...args}>{Children}</ChatHeader>,
}

export const _ChatHeaderWithoutMinimize: ChatHeaderStory = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Penny')).toBeInTheDocument()

    await userEvent.click(canvas.getAllByRole('button')[0])
    await expect(args.onClose).toHaveBeenCalled()
  },
  render: (args) => (
    <ChatHeader {...args} onMinimize={undefined}>
      {Children}
    </ChatHeader>
  ),
}
