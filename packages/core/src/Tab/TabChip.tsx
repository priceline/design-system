import * as Tab from '@radix-ui/react-tabs'
import React from 'react'
import { MappedTabProps, TabProps } from './Tab'
import { ChoiceChip } from '../Chip/ChoiceChip/ChoiceChip'
export const TabChip = ({
  tab,
  buttonChipProps,
  isActive,
  setIsActive,
  size,
  dynamicTabWidth,
}: Partial<TabProps> &
  MappedTabProps & { isActive: string; setIsActive: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <Tab.Trigger asChild value={`tab-${tab.id}`} key={`tab-${tab.id}`}>
      <ChoiceChip
        width={dynamicTabWidth && '100%'}
        onClick={() => setIsActive(tab.id)}
        {...buttonChipProps}
        Icon={tab.icon}
        label={tab.text}
        selected={isActive === tab.id}
        size={size}
      />
    </Tab.Trigger>
  )
}
