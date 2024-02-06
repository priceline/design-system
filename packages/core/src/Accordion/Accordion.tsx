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

export type AccordionProps = SpaceProps & {
  items: AccordionItemProps[]
  itemsState?: string | string[]
  onToggle?: (value: string | string[]) => void
  type?: string
  variation?: string
  isExternallyControlled?: boolean
  headerDividerColor?: string
}

export type AccordionItemProps = {
  content: React.ReactNode
  headerActions?: React.ReactNode
  headerLabel?: React.ReactNode
  headerBg?: string
  value: string
}

export function Accordion({
  items,
  itemsState,
  isExternallyControlled,
  onToggle,
  type = 'multiple',
  variation = 'default',
  p = '12px',
  headerDividerColor,
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
      {items.map((child: AccordionItemProps, index) => (
        <RadixAccordion.Item key={child.value} asChild value={child.value}>
          <StyledItem
            variation={variation}
            overflow='hidden'
            borderRadius='12px'
            marginBottom='12px'
            headerBg={child.headerBg}
            data-testid={`styled-item-${child.value}`}
            headerDividerColor={index > 0 && headerDividerColor}
          >
            <StyledTrigger {...props} p={p} variation={variation}>
              <Flex width='100%' justifyContent='space-between' alignItems='center'>
                {child.headerLabel}
                {child.headerActions ? (
                  <Box onClick={(e) => e.preventDefault()}>{child.headerActions}</Box>
                ) : null}
              </Flex>
              <IconContainer margin='auto' height='25px'>
                <StyledChevron className='chevron' variation={variation} />
              </IconContainer>
            </StyledTrigger>
            <StyledContent {...props} p={p} variation={variation}>
              {child.content}
            </StyledContent>
          </StyledItem>
        </RadixAccordion.Item>
      ))}
    </StyledAccordionRoot>
  ) : null
}
