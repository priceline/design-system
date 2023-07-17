import { Box } from '../Box'
import { Text } from '../Text'
import React from 'react'
import { TabTriggerChip } from './Tab.styled'

export const TabChip = ({ hasHover, setIsActive, index, tab, isActive }) => {
  return (
    <TabTriggerChip
      onClick={() => {
        setIsActive((prevState) => {
          const updatedState = prevState.map((value, idx) => idx === index)
          return updatedState
        })
      }}
      asChild
      hover={hasHover}
      value={tab.id}
      key={`${index}-${tab.id}`}
    >
      <Box style={{ display: 'flex', alignItems: 'center' }} mx={2}>
        {tab.icon}
        <Text py={1} pl={tab.icon ? 2 : 3} fontWeight={isActive[index] ? 700 : 0} pr={3}>
          {tab.text}
        </Text>
      </Box>
    </TabTriggerChip>
  )
}
