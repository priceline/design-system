import * as Tab from '@radix-ui/react-tabs'
import React from 'react'
import { MappedTabProps, TabProps } from './Tab'
import { ChoiceChip } from '../Chip/ChoiceChip/ChoiceChip'
export const TabChip = ({
  tab,
  buttonChipProps,
  onTabSelect,
  isActive,
  size,
  dynamicTabWidth,
}: Partial<TabProps> & MappedTabProps) => {
  return (
    <Tab.Trigger asChild value={`tab-${tab.id}`} key={`tab-${tab.id}`}>
      <ChoiceChip
        width={dynamicTabWidth ? '100%' : 'auto'}
        onClick={() => onTabSelect()}
        {...buttonChipProps}
        Icon={tab.icon}
        label={tab.text}
        selected={isActive === tab.id}
        size={size}
      />
    </Tab.Trigger>
  )
}
