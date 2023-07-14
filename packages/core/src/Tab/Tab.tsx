import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { Text } from '../Text'
import { TabContainer, TabList, TabTriggerChip, TabTriggerButton, TabTriggerRadio } from './Tab.styled'
import { Box } from '../Box'
import { Radio } from '../Radio'
import { Label } from '../Label'

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
                <TabTriggerChip
                  onClick={() => {
                    setIsActive((prevState) => {
                      const updatedState = prevState.map((value, idx) => idx === index)
                      return updatedState
                    })
                  }}
                  asChild
                  hover={onHover}
                  type={type}
                  value={tab.id}
                  key={`${index}-${tab.id}`}
                >
                  <Box style={{ display: 'flex', alignItems: 'center' }} mx={2}>
                    {tab.icon}
                    <Text py={1} pl={tab.icon ? 2 : 3} fontWeight={isActive[index] ? 700 : 0} pr={3}>
                      {tab.text}
                    </Text>
                  </Box>
                </TabTriggerChip>
              ) : type === 'button' ? (
                <TabTriggerButton hover={onHover} type={type} value={tab.id} key={`${index}-${tab.id}`}>
                  <Box style={{ display: 'flex', alignItems: 'center' }} mx={2}>
                    {tab.icon}
                    <Text py={3} fontSize={2} pl={tab.icon ? 2 : 3} pr={3}>
                      {tab.text}
                    </Text>
                  </Box>
                </TabTriggerButton>
              ) : (
                type === 'radio' && (
                  <TabTriggerRadio
                    asChild
                    hover={onHover}
                    type={type}
                    value={tab.id}
                    key={`${index}-${tab.id}`}
                  >
                    <Box style={{ display: 'flex', alignItems: 'center' }} mx={2}>
                      <Label fontSize='14px'>
                        <Radio
                          onClick={() => {
                            setIsActive((prevState) => {
                              const updatedState = prevState.map((value, idx) => idx === index)
                              return updatedState
                            })
                          }}
                          checked={isActive[index] === true}
                          name='mySelection'
                          value={tab.text}
                        />
                        {tab.text}
                      </Label>
                    </Box>
                  </TabTriggerRadio>
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
