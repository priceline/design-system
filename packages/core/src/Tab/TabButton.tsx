import { Text } from '../Text'
import React from 'react'
import { TabTriggerButton } from './Tab.styled'
import { Flex } from '../Flex'
import { Box } from '../Box'
export const TabButton = ({ hasHover, type, tab, index, value }) => {
  const [isHover, setIsHover] = React.useState(false)
  return (
    <TabTriggerButton
      hover={hasHover}
      isHover={isHover}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      type={type}
      value={`${value}-tab${index + 1}`}
      key={`${value}-tab${index + 1}`}
    >
      <Flex alignItems='center'>
        {/* TODO: Styled box to change to color: primary.dark */}
        {tab.icon && (
          <Box ml={3} size={24}>
            {tab.icon}
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
