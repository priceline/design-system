import { Text } from '../Text/Text'
import React from 'react'
import { TabTriggerButton } from './Tab.styled'
import { Flex } from '../Flex/Flex'
import { Box } from '../Box/Box'
export const TabButton = ({ border, size, hasHover, type, tab, index, value }) => {
  const [isHover, setIsHover] = React.useState(false)
  const sizeStyles = {
    sm: { fontSize: 1, py: 2 },
    md: { fontSize: 2, py: 3 },
    lg: { fontSize: 4, py: 3 },
  }
  return (
    <TabTriggerButton
      buttonBorder={border}
      hover={hasHover}
      isHover={isHover}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      type={type}
      value={`${value}-tab${index + 1}`}
      key={`${value}-tab${index + 1}`}
    >
      <Flex alignItems='center'>
        {tab.icon && (
          <Box ml={3} size={24}>
            {tab.icon}
          </Box>
        )}
        <Text
          py={sizeStyles[size].py}
          fontSize={sizeStyles[size].fontSize}
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
