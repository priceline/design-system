import * as Tab from '@radix-ui/react-tabs'
import { Text } from '../Text/Text'
import React from 'react'
import { Box } from '../Box/Box'
import { themeGet } from '@styled-system/theme-get'
import { ButtonChip } from '../Chip/ButtonChip/ButtonChip'
export const TabChip = ({ size, index, tab, value, ...props }) => {
  const sizeStyles = {
    sm: { fontSize: 1, px: 2, imgSize: 20 },
    md: { fontSize: 2, px: 3, imgSize: 24 },
    lg: { fontSize: 4, px: 3, imgSize: 32 },
  }

  return (
    <Tab.Trigger asChild value={`${value}-tab${index + 1}`} key={`${value}-tab${index + 1}`}>
      <ButtonChip {...props}>
        {tab.icon && (
          <Box ml={2} size={sizeStyles[size].imgSize}>
            {tab.icon}
          </Box>
        )}
        <Text
          py='5px'
          px={sizeStyles[size].px}
          fontSize={sizeStyles[size].fontSize}
          textStyle={themeGet('paragraph')}
        >
          {tab.text}
        </Text>
      </ButtonChip>
    </Tab.Trigger>
  )
}
