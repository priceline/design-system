/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts

import React from 'react'
import { Flex } from '../Flex'
import { Grid } from '../Grid'
import { ChatMessage } from '../ChatMessage'

export type ChatMessageVariation = 'initial' | 'incoming' | 'outgoing'

export interface IMessage {
  dateTime?: string
  message: string
  variation: ChatMessageVariation
}

export interface IChatMessageContainer {
  messageMaxWidth: string
  messages: IMessage[]
}

function ChatMessageContainer({ messageMaxWidth = '90%', messages }: IChatMessageContainer) {
  return (
    <Grid gap={2} height='100%' overflowY='scroll' p={3}>
      {messages?.map((message) => (
        <Flex
          key={message.message}
          justifyContent={message.variation === 'outgoing' ? 'flex-end' : 'flex-start'}
        >
          <ChatMessage {...message} maxWidth={messageMaxWidth} />
        </Flex>
      ))}
    </Grid>
  )
}

export default ChatMessageContainer
