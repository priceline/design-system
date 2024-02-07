import { Close, Minus } from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { Flex } from '../Flex/Flex'
import { Hide } from '../Hide/Hide'
import { getPaletteColor } from '../utils/utils'

const BorderBottomFlex = styled(Flex)`
  border-bottom: 1px solid ${getPaletteColor('border.base')};
`

const HeaderButton = styled(Button)`
  background-color: ${getPaletteColor('background.lightest')};
  color: ${getPaletteColor('text.dark')};
  padding: 0;

  &:hover {
    background-color: ${getPaletteColor('background.light')};
    color: ${getPaletteColor('text.dark')};
  }
`

/**
 * @public
 */
export type ChatHeaderProps = {
  children: React.ReactNode
  onClose: () => void
  onMinimize: () => void
}

/**
 * @public
 */
export function ChatHeader({ children, onClose, onMinimize }: ChatHeaderProps) {
  return (
    <BorderBottomFlex alignItems='center' justifyContent='space-between' p={3}>
      <Box>{children}</Box>
      <Flex>
        <Hide xs sm md>
          <HeaderButton IconLeft={Minus} onClick={onMinimize} mr={2} />
        </Hide>
        <HeaderButton IconLeft={Close} onClick={onClose} />
      </Flex>
    </BorderBottomFlex>
  )
}
