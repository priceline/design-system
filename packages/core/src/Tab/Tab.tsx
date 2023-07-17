import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { Text } from '../Text'
import { TabContainer, TabList, TabTriggerChip, TabTriggerButton, TabTriggerRadio } from './Tab.styled'
import { Box } from '../Box'
import { Radio } from '../Radio'
import { Label } from '../Label'
import { TabButton } from './TabButton'
import { TabChip } from './TabChip'
import { TabRadio } from './TabRadio'
export interface ITabsProps {
  orientation?: 'horizontal' | 'vertical'
  hasHover?: boolean
  onClick?: () => void
  size?: string
  tabsContent: {
    id: string
    children: React.ReactNode
  }[]
  tabsData: {
    id: string
    icon?: React.ReactNode
    text: string
    onClick?: () => void
  }[]
  variant?: string
  type?: 'chip' | 'radio' | 'button'
}

const PclnTab = ({
  tabsContent,
  tabsData,
  orientation = 'horizontal',
  onClick,
  hasHover = true,
  size = 'md',
  type = 'button',
}: ITabsProps) => {
  const [isActive, setIsActive] = React.useState(() => {
    const initialActiveState = new Array(tabsData.length).fill(false)
    initialActiveState[0] = true
    return initialActiveState
  })
  const tabLink = tabsContent[0].id
  return (
    <TabContainer type={type} orientation={orientation} defaultValue={tabLink}>
      <TabList orientation={orientation} aria-label='Pcln Tabs'>
        {tabsData.map((tab, index) => {
          return (
            <>
              {type === 'chip' ? (
                <TabChip
                  hasHover={hasHover}
                  tab={tab}
                  index={index}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />
              ) : type === 'button' ? (
                <TabButton hasHover={hasHover} type={type} tab={tab} index={index} />
              ) : (
                type === 'radio' && (
                  <TabRadio
                    hasHover={hasHover}
                    tab={tab}
                    index={index}
                    isActive={isActive}
                    setIsActive={setIsActive}
                  />
                )
              )}
            </>
          )
        })}
      </TabList>
      <Box m={2}>
        {tabsContent.map((tab, index) => {
          return (
            <Tabs.Content key={`${index}-${tab.id}`} value={tab.id}>
              {tab.children}
            </Tabs.Content>
          )
        })}
      </Box>
    </TabContainer>
  )
}
PclnTab.displayName = 'Tabs'

export default PclnTab
