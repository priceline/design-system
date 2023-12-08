import { expect } from '@storybook/jest'
import type { StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { Sparkle } from 'pcln-icons'
import React from 'react'

import { Flex } from '../Flex'
import { Stamp } from '../Stamp'
import { Text } from '../Text'
import { ChatHeader, type ChatHeaderProps } from './ChatHeader'

export default {
  title: 'Chat / ChatHeader',
  component: ChatHeader,
  argTypes: {
    onClose: { action: true },
    onMinimize: { action: true },
  },
}

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

export const _ChatHeader: ChatHeaderStory = {
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
