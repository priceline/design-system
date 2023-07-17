import { type } from 'os'
import React from 'react'
import { Label } from '../Label'
import { Radio } from '../Radio'
import { TabTriggerRadio } from './Tab.styled'
import { Box } from '../Box'

export const TabRadio = ({ hasHover, tab, index, setIsActive, isActive }) => {
  return (
    <TabTriggerRadio asChild hover={hasHover} type={type} value={tab.id} key={`${index}-${tab.id}`}>
      <Box style={{ display: 'flex', alignItems: 'center' }} mx={2}>
        <Label fontSize='14px'>
          <Radio
            onClick={() => {
              setIsActive((prevState) => {
                const updatedState = prevState.map((value, idx) => idx === index)
                return updatedState
              })
            }}
            checked={isActive[index] === true}
            name='mySelection'
            value={tab.text}
          />
          {tab.text}
        </Label>
      </Box>
    </TabTriggerRadio>
  )
}
