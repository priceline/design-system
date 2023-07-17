import { Flex } from '../Flex'
import { Text } from '../Text'
import React from 'react'
import { TabTriggerChip } from './Tab.styled'

export const TabChip = ({ hasHover, index, tab, value }) => {
  return (
    <TabTriggerChip
      asChild
      hover={hasHover}
      value={`${value}-tab${index + 1}`}
      key={`${value}-tab${index + 1}`}
    >
      <Flex alignItems='center' mx={2}>
        {tab.icon}
        <Text py={1} pl={tab.icon ? 2 : 3} textStyle='paragraph' pr={3}>
          {tab.text}
        </Text>
      </Flex>
    </TabTriggerChip>
  )
}
