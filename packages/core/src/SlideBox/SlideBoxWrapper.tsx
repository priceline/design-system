import React from 'react'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { Relative } from '../Relative/Relative'
import { type ArrowPosition } from './Arrow'

export type SlideBoxWrapperProps = {
  arrowPosition?: ArrowPosition
  children: React.ReactNode
}
export function SlideBoxWrapper({ children, arrowPosition }: SlideBoxWrapperProps): JSX.Element {
  return arrowPosition === 'side' ? (
    <Relative>
      <Flex alignItems='center'>{children}</Flex>
    </Relative>
  ) : (
    <Box>{children}</Box>
  )
}
