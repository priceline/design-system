import { Box } from '../Box'
import { Text } from '../Text'
import React from 'react'
import { TabTriggerButton } from './Tab.styled'

export const TabButton = ({ hasHover, type, tab, index }) => {
  return (
    <TabTriggerButton hover={hasHover} type={type} value={tab.id} key={`${index}-${tab.id}`}>
      <Box style={{ display: 'flex', alignItems: 'center' }} mx={2}>
        {tab.icon}
        <Text py={3} fontSize={2} pl={tab.icon ? 2 : 3} pr={3}>
          {tab.text}
        </Text>
      </Box>
    </TabTriggerButton>
  )
}
