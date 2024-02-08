import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { TabList } from './Tab.styled'
import { Box } from '../Box/Box'
import { TabButton } from './TabButton'
import { TabChip } from './TabChip'
import { TabRadio } from './TabRadio'
import { ButtonChipProps } from '../Chip/ButtonChip/ButtonChip'
import { IconComponent } from '../Chip/ChipContent/ChipContent'

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
  size?: 'sm' | 'md' | 'lg' | ['sm' | 'md' | 'lg']
  tabsContent: {
    id: string
    children: React.ReactNode
  }[]
  tabsData: TabDataProps[]
  variant?: string
  border?: boolean
  tabGap?: number
  type: 'chip' | 'radio' | 'button'
  buttonChipProps?: ButtonChipProps
}

export type MappedTabProps = {
  tab: TabDataProps
  icon?: IconComponent
  buttonChipProps?: ButtonChipProps
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
        return <TabChip tab={tab} icon={tab.icon} buttonChipProps={buttonChipProps} />
      case 'button':
        return <TabButton border={border} hasHover={hasHover} tab={tab} {...props} />
      case 'radio':
        return (
          <TabRadio hasHover={hasHover} tab={tab} isActive={isActive} setIsActive={setIsActive} {...props} />
        )
      default:
        return null
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
