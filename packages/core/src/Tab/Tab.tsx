import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { TabList } from './Tab.styled'
import { Box } from '../Box/Box'
import { TabButton } from './TabButton'
import { TabChip } from './TabChip'
import { TabRadio } from './TabRadio'
import { IconComponent } from '../Chip/ChipContent/ChipContent'
import { ChoiceChipProps } from '../Chip/ChoiceChip/ChoiceChip'
import { ResponsiveValue } from 'styled-system'

export type TabDataProps = {
  id: string
  icon?: IconComponent
  text: string
  onClick?: () => void
}
export type TabProps = {
  orientation?: 'horizontal' | 'vertical'
  hasHover?: boolean
  onClick?: () => void
  size?: ResponsiveValue<'sm' | 'md'> | 'sm' | 'md'
  tabsContent: {
    id: string
    children: React.ReactNode
  }[]
  tabsData: TabDataProps[]
  variant?: string
  border?: boolean
  tabGap?: number
  type: 'chip' | 'radio' | 'button'
  buttonChipProps?: ChoiceChipProps
}

export type MappedTabProps = {
  tab: TabDataProps
  icon?: IconComponent
  buttonChipProps?: ChoiceChipProps
}
export const Tab = ({
  tabsContent,
  tabsData,
  orientation = 'horizontal',
  onClick,
  hasHover = true,
  size = 'md',
  type = 'button',
  border = false,
  tabGap,
  buttonChipProps,
  ...props
}: TabProps) => {
  const [isActive, setIsActive] = React.useState(`${tabsData[0].id}`)
  const renderTab = (tab: TabDataProps) => {
    switch (type) {
      case 'chip':
        return (
          <TabChip
            isActive={isActive}
            setIsActive={setIsActive}
            tab={tab}
            size={size}
            buttonChipProps={buttonChipProps}
          />
        )
      case 'button':
        return <TabButton border={border} hasHover={hasHover} tab={tab} {...props} />
      case 'radio':
        return (
          <TabRadio hasHover={hasHover} tab={tab} isActive={isActive} setIsActive={setIsActive} {...props} />
        )
    }
  }
  if (orientation === 'vertical') {
    return (
      <Tabs.Root defaultValue={`tab-${tabsData[0].id}`}>
        <TabList orientation={orientation} aria-label='Pcln Tabs'>
          {tabsData.map((tab, index) => (
            <>
              <Box key={`tab-${tab.id}`} my={tabGap}>
                {renderTab(tab)}
              </Box>
              <Box key={`content-${tab.id}`}>
                <Tabs.Content value={`tab-${tab.id}`}>
                  {tabsContent[index] && tabsContent[index].children}
                </Tabs.Content>
              </Box>
            </>
          ))}
        </TabList>
      </Tabs.Root>
    )
  }
  return (
    <Tabs.Root defaultValue={`tab-${tabsData[0].id}`}>
      <TabList orientation={orientation} aria-label='Pcln Tabs'>
        {tabsData.map((tab) => {
          return (
            <Box mx={tabGap} key={`tab-${tab.id}`}>
              {renderTab(tab)}
            </Box>
          )
        })}
      </TabList>
      <Box>
        {tabsContent.map((tab) => {
          return (
            <Tabs.Content key={`tab-${tab.id}`} value={`tab-${tab.id}`}>
              {tab.children}
            </Tabs.Content>
          )
        })}
      </Box>
    </Tabs.Root>
  )
}
Tab.displayName = 'Tab'
