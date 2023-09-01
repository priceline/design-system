/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts
import React from 'react'
import * as RadixAccordion from '@radix-ui/react-accordion'
import { IconContainer, StyledChevron, StyledContent, StyledItem, StyledTrigger } from './Accordion.styled'
import { Box, Flex } from '..'

export interface IAccordion {
  items: IAccordionItem[]
  itemsState?: string | string[]
  onToggle?: (value: string | string[]) => void
  type?: string
  variation?: string
  children?: React.ReactNode
}

export interface IAccordionItem {
  content: React.ReactNode
  headerActions?: React.ReactNode
  headerLabel?: React.ReactNode
  value: string
  children?: React.ReactNode
}

export const Accordion = ({
  items,
  itemsState,
  onToggle,
  type = 'multiple',
  variation = 'default',
}: IAccordion) => {
  return items ? (
    <RadixAccordion.Root
      // @ts-ignore
      type={type}
      defaultValue={itemsState ?? items.map((child) => child.value)}
      collapsible
      onValueChange={onToggle}
      style={{
        isolation: 'isolate',
      }}
    >
      {items.map((child: IAccordionItem) => (
        <RadixAccordion.Item key={child.value} asChild value={child.value}>
          <StyledItem variation={variation} overflow='hidden' borderRadius='12px' marginBottom='12px'>
            <StyledTrigger m={2} variation={variation}>
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
            <StyledContent variation={variation}>{child.content}</StyledContent>
          </StyledItem>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  ) : null
}
