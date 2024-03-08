import * as Tabs from '@radix-ui/react-tabs'
import React from 'react'
import { ResponsiveValue } from 'styled-system'
import { Box } from '../Box/Box'
import { IconComponent } from '../Chip/ChipContent/ChipContent'
import { ChoiceChipProps } from '../Chip/ChoiceChip/ChoiceChip'
import { Grid } from '../Grid/Grid'
import { TabList } from './Tab.styled'
import { TabButton } from './TabButton'
import { TabChip } from './TabChip'
import { TabRadio } from './TabRadio'

/**
 * Represents the data for a single tab in the tab component.
 * @public
 */ export type TabDataProps = {
  id: string
  icon?: IconComponent
  text: string
  children: React.ReactNode
  onTabSelect: () => void
}
/**
 * Represents the props for a tab component.
 * @public
 */
export type TabProps = {
  ariaLabel?: string
  orientation?: 'horizontal' | 'vertical'
  size?: ResponsiveValue<'sm' | 'md'>
  tabsData: TabDataProps[]
  variant?: string
  border?: boolean
  tabGap?: number
  type: 'chip' | 'radio' | 'button'
  isTransparent?: boolean
  buttonChipProps?: ChoiceChipProps
  dynamicTabWidth?: boolean
  defaultValue?: string
}
export type MappedTabProps = {
  tab: TabDataProps
  buttonChipProps?: ChoiceChipProps
  isActive?: string
  onTabSelect?: () => void
}
export const Tab = ({
  tabsData,
  orientation = 'horizontal',
  size = 'md',
  type = 'button',
  border = false,
  tabGap,
  isTransparent = false,
  dynamicTabWidth = false,
  ariaLabel = 'Tabs',
  defaultValue = tabsData[0].id,
  buttonChipProps,
}: TabProps) => {
  const [isActive, setIsActive] = React.useState(`${defaultValue}`)
  function onTabSelect(tab: TabDataProps) {
    setIsActive(tab.id)
    tab.onTabSelect()
  }
  const renderTab = (tab: TabDataProps) => {
    switch (type) {
      case 'chip':
        return (
          <TabChip
            isActive={isActive}
            onTabSelect={() => {
              onTabSelect(tab)
            }}
            dynamicTabWidth={dynamicTabWidth}
            tab={tab}
            size={size}
            buttonChipProps={buttonChipProps}
          />
        )
      case 'button':
        return (
          <TabButton
            onTabSelect={() => {
              onTabSelect(tab)
            }}
            dynamicTabWidth={dynamicTabWidth}
            isTransparent={isTransparent}
            border={border}
            tab={tab}
            size={size}
          />
        )
      case 'radio':
        return (
          <TabRadio
            onTabSelect={() => {
              onTabSelect(tab)
            }}
            tab={tab}
            isActive={isActive}
          />
        )
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
      <Tabs.Root defaultValue={`tab-${defaultValue}`}>
        <TabList orientation='vertical' aria-label={ariaLabel}>
          <Grid gap={tabGap}>
            {tabsData.map((tab, index) => (
              <>{renderTab(tab)}</>
            ))}
          </Grid>
        </TabList>
        <Box>
          {tabsData.map((tab) => {
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
  return (
    <Tabs.Root defaultValue={`tab-${defaultValue}`}>
      <TabList orientation={orientation} aria-label={ariaLabel}>
        <Grid {...gridProps(dynamicTabWidth)}>
          {tabsData.map((tab) => {
            return renderTab(tab)
          })}
        </Grid>
      </TabList>
      <Box>
        {tabsData.map((tab) => {
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
