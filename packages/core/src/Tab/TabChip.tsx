import { Flex } from '../Flex'
import { Text } from '../Text'
import React from 'react'
import { TabTriggerChip } from './Tab.styled'
import { Box } from '../Box'
import { themeGet } from '@styled-system/theme-get'
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
        <Text py='5px' px={2} textStyle={themeGet('paragraph')}>
          {tab.text}
        </Text>
      </Flex>
    </TabTriggerChip>
  )
}
