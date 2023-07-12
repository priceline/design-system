/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts

import React from 'react'
import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Absolute } from '../Absolute'
import { Flex, IFlexProps } from '../Flex'
import { Text } from '../Text'
import { Priceline } from 'pcln-icons'
import { applyVariations, getPaletteColor, getTextColorOn } from '../utils'

const variations = {
  incoming: css`
    border-top-left-radius: ${themeGet('borderRadii.sm')};
  `,
  outgoing: css`
    background-color: ${getPaletteColor('primary.base')};
    border-top-right-radius: ${themeGet('borderRadii.sm')};
    color: ${getTextColorOn('primary.base')};

    justify-content: flex-end;
  `,
}

const Message = styled(Flex)`
  position: relative;
  background-color: ${getPaletteColor('background.light')};
  color: ${getTextColorOn('background.light')};
  justify-content: flex-start;
  max-width: 90%;
  width: fit-content;

  ${applyVariations('ChatMessage', variations)};
`

export interface IChatMessage extends IFlexProps {
  footer?: React.ReactNode
  header?: React.ReactNode
  Icon?: React.FC<{ color?: string, size?: string}>
  message: string
  variation: 'initial' | 'incoming' | 'outgoing'
}

function ChatMessage({ footer, header, Icon = Priceline, message, variation, ...props }: IChatMessage) {
  const marginTop = header ? 3 : 0
  const marginBottom = footer ? 3 : 0

  return (
    <Message borderRadius='xl' variation={variation} mt={marginTop} mb={marginBottom} p={3} {...props}>
      {header && (
        <Absolute top='-20px' left='0px' width='100%' px={3}>
          {header}
        </Absolute>
      )}
      {variation === 'initial' && (
        <Absolute top={-16} left={-16}>
          <Icon color='primary' size='32px' data-testid='chat-message-icon' />
        </Absolute>
      )}
      <Text textStyle='paragraph2'>{message}</Text>
      {footer && (
        <Absolute bottom='-20px' left='0px' width='100%' px={3}>
          {footer}
        </Absolute>
      )}
    </Message>
  )
}

export default ChatMessage
