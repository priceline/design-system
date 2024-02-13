import React from 'react'
import { Flex } from '../Flex/Flex'
import { Label } from '../Label/Label'
import { Radio } from '../Radio/Radio'
import { MappedTabProps } from './Tab'
import { TabTriggerRadio } from './Tab.styled'

export const TabRadio = ({
  tab,
  isActive,
  onTabSelect,
}: MappedTabProps & {
  isActive: string
}) => {
  return (
    <TabTriggerRadio asChild value={`tab-${tab.id}`} key={`tab-${tab.id}`}>
      <Flex alignItems='center' mr={2}>
        <Label fontSize='14px'>
          <Radio value={tab.id} checked={isActive === tab.id} name={tab.id} onChange={onTabSelect} />
          {tab.text}
        </Label>
      </Flex>
    </TabTriggerRadio>
  )
}
