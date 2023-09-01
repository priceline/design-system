/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts

import React from 'react'
import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Absolute } from '../Absolute'
import { Flex, IFlexProps } from '../Flex'
import { Text } from '../Text'
import { PricelineSparkle } from 'pcln-icons'
import { applyVariations, getPaletteColor, getTextColorOn } from '../utils'

const variations = {
  initial: css<IChatMessage>`
    margin-left: ${themeGet('space.3')};
  `,
  incoming: css<IChatMessage>`
    border-top-left-radius: 4px;
  `,
  outgoing: css<IChatMessage>`
    background-color: ${getPaletteColor('primary.base')};
    border-top-right-radius: 4px;
    color: ${getTextColorOn('primary.base')};
    justify-content: flex-end;
  `,
}

const Message = styled(Flex)<IChatMessage>`
  position: relative;
  background-color: ${getPaletteColor('background.light')};
  color: ${getTextColorOn('background.light')};
  justify-content: flex-start;
  width: fit-content;

  ${applyVariations('ChatMessage', variations)};
`

export const variationNames = ['initial', 'incoming', 'outgoing']

export interface IChatMessage extends IFlexProps {
  footer?: React.ReactNode
  header?: React.ReactNode
  Icon?: React.FC<{ color?: string; size?: string }>
  message: string
  variation: (typeof variationNames)[number]
}

function ChatMessage({
  footer,
  header,
  Icon = PricelineSparkle,
  message,
  variation,
  ...props
}: IChatMessage) {
  const marginTop = header ? 3 : 0
  const marginBottom = footer ? 3 : 0

  return (
    <Message borderRadius='18px' variation={variation} mt={marginTop} mb={marginBottom} p='12px' {...props}>
      {header && (
        <Absolute top='-20px' left='0px' minWidth='300px' width='100%' px={3}>
          {header}
        </Absolute>
      )}
      {variation === 'initial' && (
        <Absolute top={-16} left={-16}>
          <Flex
            alignItems='center'
            borderRadius='full'
            color='primary'
            justifyContent='center'
            height='32px'
            width='32px'
          >
            <Icon color='text.lightest' size='24px' data-testid='chat-message-icon' />
          </Flex>
        </Absolute>
      )}
      <Text textStyle='paragraph2'>{message}</Text>
      {footer && (
        <Absolute bottom='-20px' left='0px' minWidth='300px' width='100%' px={3}>
          {footer}
        </Absolute>
      )}
    </Message>
  )
}

export default ChatMessage
