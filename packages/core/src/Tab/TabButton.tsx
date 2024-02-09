import React from 'react'
import { StyledText, TabTriggerButton } from './Tab.styled'
import { Flex } from '../Flex/Flex'
import { Box } from '../Box/Box'
import type { TabProps, MappedTabProps } from './Tab'
export const TabButton = ({ border, hasHover, tab, size }: Partial<TabProps> & MappedTabProps) => {
  const [isHover, setIsHover] = React.useState(false)
  return (
    <TabTriggerButton
      buttonBorder={border}
      hover={hasHover}
      isHover={isHover}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      value={`tab-${tab.id}`}
      key={`tab-${tab.id}`}
    >
      <Flex alignItems='center'>
        {tab.icon && (
          <Box ml={3} size={24}>
            {React.createElement(tab.icon, {
              title: tab.icon.name,
              size: 24,
            })}
          </Box>
        )}
        <StyledText
          size={size}
          pl={tab.icon ? 2 : 3}
          style={{ fontFamily: 'Montserrat' }}
          textStyle='paragraph'
          pr={3}
        >
          {tab.text}
        </StyledText>
      </Flex>
    </TabTriggerButton>
  )
}
