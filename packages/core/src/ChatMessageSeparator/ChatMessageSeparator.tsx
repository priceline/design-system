import React from 'react'
import { Divider } from '../Divider/Divider'
import { Flex } from '../Flex/Flex'
import { Text } from '../Text/Text'

/**
 * @public
 */
export type ChatMessageSeparatorProps = {
  message?: string
}

/**
 * A visual separator with optional centered text for chat message groups.
 *
 * Displays horizontal dividers with an optional message in between (e.g., "Today",
 * "Yesterday", or timestamps). Use to separate messages by date or conversation topic.
 *
 * @public
 */
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
