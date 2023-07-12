/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts

import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { Button } from '../Button'
import { Flex } from '../Flex'
import { Hide } from '../Hide'
import { Close, Minus } from 'pcln-icons'
import { getPaletteColor } from '../utils'

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

export interface IChatHeader {
  children: React.ReactElement
  onClose: () => void
  onMinimize: () => void
}

function ChatHeader({ children, onClose, onMinimize }: IChatHeader) {
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

export default ChatHeader
