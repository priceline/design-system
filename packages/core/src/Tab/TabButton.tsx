import { Text } from '../Text/Text'
import React from 'react'
import { TabTriggerButton } from './Tab.styled'
import { Flex } from '../Flex/Flex'
import { Box } from '../Box/Box'
import type { TabProps, TabDataProps, MappedTabProps } from './Tab'
export const TabButton = ({
  border,
  hasHover,
  tab,
}: Partial<TabProps> & MappedTabProps & { tab: TabDataProps }) => {
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
        <Text
          py={3}
          fontSize={2}
          pl={tab.icon ? 2 : 3}
          style={{ fontFamily: 'Montserrat' }}
          textStyle='paragraph'
          pr={3}
        >
          {tab.text}
        </Text>
      </Flex>
    </TabTriggerButton>
  )
}
