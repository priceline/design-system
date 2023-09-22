/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts
import React from 'react'
import * as RadixAccordion from '@radix-ui/react-accordion'
import {
  IconContainer,
  StyledChevron,
  StyledContent,
  StyledItem,
  StyledTrigger,
  StyledAccordionRoot,
} from './Accordion.styled'
import { Box, Flex } from '..'
import { SpaceProps } from 'styled-system'

export interface IAccordion extends SpaceProps {
  items: IAccordionItem[]
  itemsState?: string | string[]
  onToggle?: (value: string | string[]) => void
  type?: string
  variation?: string
  isExternallyControlled?: boolean
}

export interface IAccordionItem {
  content: React.ReactNode
  headerActions?: React.ReactNode
  headerLabel?: React.ReactNode
  headerBg?: string
  value: string
}

export const Accordion = ({
  items,
  itemsState,
  isExternallyControlled,
  onToggle,
  type = 'multiple',
  variation = 'default',
  p = '12px',
  ...props
}: IAccordion) => {
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
      {items.map((child: IAccordionItem) => (
        <RadixAccordion.Item key={child.value} asChild value={child.value}>
          <StyledItem
            variation={variation}
            overflow='hidden'
            borderRadius='12px'
            marginBottom='12px'
            headerBg={child.headerBg}
            data-testid={`styled-item-${child.value}`}
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
