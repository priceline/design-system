import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { TabList } from './Tab.styled'
import { Box } from '../Box/Box'
import { TabButton } from './TabButton'
import { TabChip } from './TabChip'
import { TabRadio } from './TabRadio'
import { v4 as uuidv4 } from 'uuid'

export interface ITabsProps {
  orientation?: 'horizontal' | 'vertical'
  hasHover?: boolean
  onClick?: () => void
  size: 'sm' | 'md' | 'lg' | ['sm' | 'md' | 'lg']
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
  border?: boolean
  tabGap?: number
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
  border = false,
  tabGap,
  ...props
}: ITabsProps) => {
  const [isActive, setIsActive] = React.useState(() => {
    const initialActiveState = new Array(tabsData.length).fill(false)
    initialActiveState[0] = true
    return initialActiveState
  })
  const tabLink = uuidv4()
  const renderTab = (tab, index) => {
    switch (type) {
      case 'chip':
        return <TabChip size={size} value={tabLink} tab={tab} index={index} {...props} />
      case 'button':
        return (
          <TabButton
            border={border}
            size={size}
            hasHover={hasHover}
            type={type}
            tab={tab}
            value={tabLink}
            {...props}
            index={index}
          />
        )
      case 'radio':
        return (
          <TabRadio
            value={tabLink}
            hasHover={hasHover}
            tab={tab}
            index={index}
            isActive={isActive}
            setIsActive={setIsActive}
            {...props}
          />
        )
      default:
        return null
    }
  }
  if (orientation === 'vertical') {
    return (
      <Tabs.Root defaultValue={`${tabLink}-tab1`}>
        <TabList orientation={orientation} aria-label='Pcln Tabs'>
          {tabsData.map((tab, index) => (
            <>
              <Box key={`tab${index}`} mx={tabGap}>
                {renderTab(tab, index)}
              </Box>
              <Box key={`content${index}`}>
                <Tabs.Content value={`${tabLink}-tab${index + 1}`}>
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
    <Tabs.Root defaultValue={`${tabLink}-tab1`}>
      <TabList orientation={orientation} aria-label='Pcln Tabs'>
        {tabsData.map((tab, index) => {
          return (
            <Box mx={tabGap} key={`tab${index + 1}`}>
              {renderTab(tab, index)}
            </Box>
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
    </Tabs.Root>
  )
}
PclnTab.displayName = 'Tabs'

export default PclnTab
