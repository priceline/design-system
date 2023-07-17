import { Text } from '../Text'
import React from 'react'
import { TabTriggerButton } from './Tab.styled'
import { Flex } from '../Flex'

export const TabButton = ({ hasHover, type, tab, index, value }) => {
  return (
    <TabTriggerButton
      hover={hasHover}
      type={type}
      value={`${value}-tab${index + 1}`}
      key={`${value}-tab${index + 1}`}
    >
      <Flex alignItems='center'>
        {tab.icon}
        <Text py={3} fontSize={2} pl={tab.icon ? 2 : 3} textStyle='paragraph' pr={3}>
          {tab.text}
        </Text>
      </Flex>
    </TabTriggerButton>
  )
}
