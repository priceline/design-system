/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts

import React from 'react'
import { Divider } from '../Divider'
import { Flex } from '../Flex'
import { Text } from '../Text'

export interface IChatMessageSeparatorProps {
  message?: string
}

function ChatMessageSeparator({ message }: IChatMessageSeparatorProps) {
  return (
    <Flex alignItems='center' justifyContent='center'>
      <Divider width='100%' />
      {message && (
        <Text color='text.light' textAlign='center' textStyle='subheading6' textWrap='nowrap' mx={3}>
          {message}
        </Text>
      )}
      <Divider width='100%' />
    </Flex>
  )
}

export default ChatMessageSeparator
