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
}: Partial<TabProps> & MappedTabProps) => {
  const [isHover, setIsHover] = React.useState(false)
  return (
    <TabTriggerButton
      dynamicTabWidth={dynamicTabWidth}
      isTransparent={isTransparent}
      buttonBorder={border}
      isActiveHover={isHover}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      value={`tab-${tab.id}`}
      key={`tab-${tab.id}`}
    >
      {tab.icon ? (
        <>
          <Flex alignItems='center' justifyContent='center'>
            <Box>
              {React.createElement(tab.icon, {
                title: tab.icon.name,
                size: 24,
              })}
            </Box>
            <StyledText
              icon={tab.icon}
              size={size}
              style={{ fontFamily: 'Montserrat' }}
              textStyle='paragraph'
            >
              {tab.text}
            </StyledText>
          </Flex>
        </>
      ) : (
        <StyledText size={size} style={{ fontFamily: 'Montserrat' }} textStyle='paragraph'>
          {tab.text}
        </StyledText>
      )}
    </TabTriggerButton>
  )
}
