/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts

import React from 'react'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Flex } from '../Flex'
import { ChatMessage } from '../ChatMessage'

const GapFlex = styled(Flex)`
  height: 100%;
  overflow-y: scroll;

  & > :not(:last-child) {
    margin-bottom: ${themeGet('space.2')};
  }
`

const MaxWidthFlex = styled(Flex)`
  & > * {
    max-width: 90%;
  }
`

interface IMessage {
  dateTime: string
  message: string
  variation: string
}

export interface IChatMessageContainer {
  messages: IMessage[]
}

function ChatMessageContainer({ messages }: IChatMessageContainer) {
  return (
    <GapFlex flexDirection='column' p={3}>
      {messages?.map((message) => (
        <MaxWidthFlex key={message} justifyContent={message.variation === 'outgoing' ? 'flex-end' : 'flex-start'} width='100%'>
          <ChatMessage {...message} />
        </MaxWidthFlex>
      ))}
    </GapFlex>
  )
}

export default ChatMessageContainer