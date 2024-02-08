import * as Tab from '@radix-ui/react-tabs'
import { Text } from '../Text/Text'
import React from 'react'
import { themeGet } from '@styled-system/theme-get'
import { ButtonChip } from '../Chip/ButtonChip/ButtonChip'
import { MappedTabProps } from './Tab'
export const TabChip = ({ tab, buttonChipProps, icon }: MappedTabProps) => {
  return (
    <Tab.Trigger asChild value={`tab-${tab.id}`} key={`tab-${tab.id}`}>
      <ButtonChip {...buttonChipProps} Icon={icon}>
        <Text py='5px' px={2} fontSize={2} textStyle={themeGet('paragraph')}>
          {tab.text}
        </Text>
      </ButtonChip>
    </Tab.Trigger>
  )
}
