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
import { Grid } from '../Grid/Grid'

export type TabDataProps = {
  id: string
  icon?: IconComponent
  text: string
}
export type TabProps = {
  orientation?: 'horizontal' | 'vertical'
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
  isTransparent?: boolean
  buttonChipProps?: ChoiceChipProps
  dynamicTabWidth?: boolean
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
  size = 'md',
  type = 'button',
  border = false,
  tabGap,
  isTransparent = false,
  dynamicTabWidth = false,
  buttonChipProps,
  ...props
}: TabProps) => {
  const [isActive, setIsActive] = React.useState(`${tabsData[0].id}`)
  const renderTab = (tab: TabDataProps) => {
    switch (type) {
      case 'chip':
        return (
          <TabChip
            dynamicTabWidth={dynamicTabWidth}
            isActive={isActive}
            setIsActive={setIsActive}
            tab={tab}
            size={size}
            buttonChipProps={buttonChipProps}
          />
        )
      case 'button':
        return (
          <TabButton
            dynamicTabWidth={dynamicTabWidth}
            isTransparent={isTransparent}
            border={border}
            tab={tab}
            size={size}
            {...props}
          />
        )
      case 'radio':
        return <TabRadio tab={tab} isActive={isActive} setIsActive={setIsActive} {...props} />
    }
  }
  const gridProps = (dynamicTabWidth) => {
    switch (dynamicTabWidth) {
      case true:
        return {
          autoFlow: 'column',
          columnGap: tabGap,
        }
      case false:
        return {
          autoFlow: 'column',
          autoColumns: 'max-content',
          columnGap: tabGap,
        }
    }
  }
  if (orientation === 'vertical') {
    return (
      <Tabs.Root defaultValue={`tab-${tabsData[0].id}`}>
        <TabList orientation={orientation} aria-label='Pcln Tabs'>
          <Grid gap={tabGap}>
            {tabsData.map((tab, index) => (
              <>
                <Box key={`tab-${tab.id}`}>{renderTab(tab)}</Box>
                <Box key={`content-${tab.id}`}>
                  <Tabs.Content value={`tab-${tab.id}`}>
                    {tabsContent[index] && tabsContent[index].children}
                  </Tabs.Content>
                </Box>
              </>
            ))}
          </Grid>
        </TabList>
      </Tabs.Root>
    )
  }
  return (
    <Tabs.Root defaultValue={`tab-${tabsData[0].id}`}>
      <TabList orientation={orientation} aria-label='Pcln Tabs'>
        <Grid {...gridProps(dynamicTabWidth)}>
          {tabsData.map((tab) => {
            return <Box key={`tab-${tab.id}`}>{renderTab(tab)}</Box>
          })}
        </Grid>
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
