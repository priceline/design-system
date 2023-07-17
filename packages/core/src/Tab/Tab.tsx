import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { TabContainer, TabList } from './Tab.styled'
import { Box } from '../Box'
import { TabButton } from './TabButton'
import { TabChip } from './TabChip'
import { TabRadio } from './TabRadio'
import { v4 as uuidv4 } from 'uuid'

export interface ITabsProps {
  orientation?: 'horizontal' | 'vertical'
  hasHover?: boolean
  onClick?: () => void
  size?: string
  tabsContent: {
    id?: string
    children: React.ReactNode
  }[]
  tabsData: {
    id?: string
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
  const tabLink = uuidv4()
  return (
    <TabContainer type={type} orientation={orientation} defaultValue={`${tabLink}-tab1`}>
      <TabList orientation={orientation} aria-label='Pcln Tabs'>
        {tabsData.map((tab, index) => {
          return (
            <>
              {type === 'chip' ? (
                <TabChip value={tabLink} hasHover={hasHover} tab={tab} index={index} />
              ) : type === 'button' ? (
                <TabButton hasHover={hasHover} type={type} tab={tab} value={tabLink} index={index} />
              ) : (
                type === 'radio' && (
                  <TabRadio
                    value={tabLink}
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
      <Box>
        {tabsContent.map((tab, index) => {
          return (
            <Tabs.Content key={`tab${index + 1}`} value={`${tabLink}-tab${index + 1}`}>
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
