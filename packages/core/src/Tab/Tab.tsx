import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { Text } from '../Text'
import { TabContainer, SIZES, TabList, TabTrigger } from './Tab.styled'
import { Box } from '../Box'

export interface ITabsProps {
  orientation?: 'horizontal' | 'vertical'
  onHover?: boolean
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
  onHover = true,
  size = 'md',
  type = 'button',
}: ITabsProps) => {
  const tabLink = tabsContent[0].id
  const textStyle = SIZES[size].textStyle
  return (
    <TabContainer type={type} orientation={orientation} defaultValue={tabLink}>
      <TabList orientation={orientation} aria-label='Pcln Tabs'>
        {tabsData.map((tab, index) => {
          return (
            <>
              <TabTrigger hover={onHover} type={type} asChild value={tab.id} key={`${index}-${tab.id}`}>
                <Box style={{ display: 'flex', alignItems: 'center' }} mx={2}>
                  {tab.icon}
                  <Text fontWeight={1} fontSize={2} py={3} pl={tab.icon ? 2 : 4} pr={4} textStyle={textStyle}>
                    {tab.text}
                  </Text>
                </Box>
              </TabTrigger>
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
