import * as RadixAccordion from '@radix-ui/react-accordion'
import React from 'react'
import { SpaceProps } from 'styled-system'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import {
  IconContainer,
  StyledAccordionRoot,
  StyledChevron,
  StyledContent,
  StyledItem,
  StyledTrigger,
} from './Accordion.styled'
import { Text } from '../Text/Text'

/**
 * @public
 */
export type AccordionProps = SpaceProps & {
  items: AccordionItemProps[]
  itemsState?: string | string[]
  onToggle?: (value: string | string[]) => void
  type?: string
  variation?: string
  isExternallyControlled?: boolean
  headerDividerColor?: string
  useTextToggle?: boolean
}

/**
 * @public
 */
export type AccordionItemProps = {
  content: React.ReactNode
  headerActions?: React.ReactNode
  headerLabel?: React.ReactNode
  headerBg?: string
  value: string
  contentBg?: string
  hoverBg?: string
}

/**
 * @public
 */
export function Accordion({
  items,
  itemsState,
  isExternallyControlled,
  onToggle,
  type = 'multiple',
  variation = 'default',
  p = '12px',
  headerDividerColor,
  useTextToggle = false,
  ...props
}: AccordionProps): React.ReactElement {
  return items ? (
    <StyledAccordionRoot
      // @ts-ignore
      type={type}
      defaultValue={itemsState ?? items.map((child) => child.value)}
      value={isExternallyControlled ? itemsState : undefined}
      collapsible
      variation={variation}
      onValueChange={onToggle}
      data-testid='accordion-root'
      style={{
        isolation: 'isolate',
      }}
    >
      {items.map((child: AccordionItemProps, index) => {
        return (
          <RadixAccordion.Item key={child.value} asChild value={child.value}>
            <StyledItem
              variation={variation}
              overflow='hidden'
              borderRadius='12px'
              marginBottom='12px'
              headerBg={child.headerBg}
              hoverBg={child.hoverBg}
              data-testid={`styled-item-${child.value}`}
              headerDividerColor={index > 0 && headerDividerColor}
            >
              <StyledTrigger {...props} p={p} variation={variation} hoverBg={child.hoverBg}>
                <Flex width='100%' justifyContent='space-between' alignItems='center'>
                  {child.headerLabel}
                  {child.headerActions ? (
                    <Box onClick={(e) => e.preventDefault()}>{child.headerActions}</Box>
                  ) : null}
                </Flex>
                {useTextToggle ? (
                  <>
                    <Text.span textStyle='captionBold' color='primary.base' className='lessText'>
                      Less
                    </Text.span>
                    <Text.span textStyle='captionBold' color='primary.base' className='moreText'>
                      More
                    </Text.span>
                  </>
                ) : (
                  <IconContainer margin='auto' height='25px'>
                    <StyledChevron className='chevron' variation={variation} />
                  </IconContainer>
                )}
              </StyledTrigger>
              <StyledContent {...props} p={p} variation={variation} contentBg={child.contentBg}>
                {child.content}
              </StyledContent>
            </StyledItem>
          </RadixAccordion.Item>
        )
      })}
    </StyledAccordionRoot>
  ) : null
}
