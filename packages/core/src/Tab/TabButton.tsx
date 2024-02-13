import React from 'react'
import { StyledText, TabTriggerButton } from './Tab.styled'
import type { TabProps, MappedTabProps } from './Tab'
import { Flex } from '../Flex/Flex'
import { Box } from '../Box/Box'
export const TabButton = ({
  border,
  tab,
  size,
  isTransparent,
  dynamicTabWidth,
  onTabSelect,
}: Partial<TabProps> & MappedTabProps) => {
  return (
    <TabTriggerButton
      dynamicTabWidth={dynamicTabWidth}
      isTransparent={isTransparent}
      buttonBorder={border}
      value={`tab-${tab.id}`}
      key={`tab-${tab.id}`}
      onClick={() => onTabSelect()}
    >
      {tab.icon ? (
        <>
          <Flex alignItems='center' justifyContent='center'>
            <Box>
              {React.createElement(tab.icon, {
                title: tab.icon.name,
                marginLeft: '14px',
                size: 24,
              })}
            </Box>
            <StyledText icon={tab.icon} size={size} textStyle='paragraph'>
              {tab.text}
            </StyledText>
          </Flex>
        </>
      ) : (
        <StyledText size={size} textStyle='paragraph'>
          {tab.text}
        </StyledText>
      )}
    </TabTriggerButton>
  )
}
