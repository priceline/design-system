import React from 'react'
import { Divider } from '../Divider/Divider'
import { Flex } from '../Flex/Flex'
import { Text } from '../Text/Text'

export type ChatMessageSeparatorProps = {
  message?: string
}

export function ChatMessageSeparator({ message }: ChatMessageSeparatorProps) {
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
