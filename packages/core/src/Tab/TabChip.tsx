import { Flex } from '../Flex'
import { Text } from '../Text'
import React from 'react'
import { TabTriggerChip } from './Tab.styled'
import { Box } from '../Box'

export const TabChip = ({ hasHover, index, tab, value }) => {
  return (
    <TabTriggerChip
      asChild
      hover={hasHover}
      value={`${value}-tab${index + 1}`}
      key={`${value}-tab${index + 1}`}
    >
      <Flex alignItems='center' mr={2}>
        {tab.icon && (
          <Box ml={2} size={24}>
            {tab.icon}
          </Box>
        )}
        <Text py='5px' px={2} textStyle='paragraph' style={{ fontSize: 'Montserrat' }}>
          {tab.text}
        </Text>
      </Flex>
    </TabTriggerChip>
  )
}
