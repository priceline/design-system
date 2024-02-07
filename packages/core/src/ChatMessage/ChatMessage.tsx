import themeGet from '@styled-system/theme-get'
import { PricelineSparkle } from 'pcln-icons'
import React from 'react'
import styled, { css } from 'styled-components'
import { Absolute } from '../Absolute/Absolute'
import { Flex, type FlexProps } from '../Flex/Flex'
import { Text } from '../Text/Text'
import { applyVariations, getPaletteColor, getTextColorOn } from '../utils/utils'

const variations = {
  initial: css`
    margin-left: ${themeGet('space.3')};
  `,
  incoming: css`
    border-top-left-radius: 4px;
  `,
  outgoing: css`
    background-color: ${getPaletteColor('primary.base')};
    border-top-right-radius: 4px;
    color: ${getTextColorOn('primary.base')};
    justify-content: flex-end;
  `,
}

const Message = styled(Flex)`
  position: relative;
  background-color: ${getPaletteColor('background.light')};
  color: ${getTextColorOn('background.light')};
  justify-content: flex-start;
  width: fit-content;

  ${applyVariations('ChatMessage', variations)};
`

/**
 * @public
 */
export const ChatMessageVariations = ['initial', 'incoming', 'outgoing']

/**
 * @public
 */
export type ChatMessageProps = FlexProps & {
  footer?: React.ReactNode
  header?: React.ReactNode
  Icon?: React.FC<{ color?: string; size?: string }>
  message: React.ReactNode
  variation: (typeof ChatMessageVariations)[number]
}

/**
 * @public
 */
export function ChatMessage({
  footer,
  header,
  Icon = PricelineSparkle,
  message,
  variation,
  ...props
}: ChatMessageProps) {
  const marginTop = header ? 3 : 0
  const marginBottom = footer ? 3 : 0
  const footerPosition =
    variation === 'outgoing'
      ? {
          right: 0,
        }
      : {
          left: 0,
        }

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
        <Absolute bottom='-20px' minWidth='300px' width='100%' px={3} {...footerPosition}>
          {footer}
        </Absolute>
      )}
    </Message>
  )
}
