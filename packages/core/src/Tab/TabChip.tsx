import * as Tab from '@radix-ui/react-tabs'
import React from 'react'
import { MappedTabProps } from './Tab'
import { ChoiceChip } from '../Chip/ChoiceChip/ChoiceChip'
export const TabChip = ({
  tab,
  buttonChipProps,
  isActive,
  setIsActive,
  size,
}: MappedTabProps & { isActive: string; setIsActive: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <Tab.Trigger asChild value={`tab-${tab.id}`} key={`tab-${tab.id}`}>
      <ChoiceChip
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
