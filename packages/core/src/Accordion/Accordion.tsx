/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts
import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import {
  IconContainer,
  StyledChevron,
  StyledContent,
  StyledItem,
  StyledTrigger,
  StyledAccordionRoot,
} from './Accordion.styled'
import { Box, Flex } from '..'
import PropTypes from 'prop-types'

export interface IAccordion {
  items: IAccordionItem[]
  itemsState?: PropTypes.string | PropTypes.string[]
  onToggle?: PropTypes.func
  type?: PropTypes.string
  variation?: PropTypes.string
}

export interface IAccordionItem {
  content: React.ReactNode
  headerActions?: React.ReactNode
  headerLabel?: React.ReactNode
  headerBg?: PropTypes.string
  value: PropTypes.string
}

export const PclnAccordion = ({
  items,
  itemsState,
  onToggle,
  type = 'multiple',
  variation = 'default',
}: IAccordion) => {
  return items ? (
    <StyledAccordionRoot
      type={type}
      defaultValue={itemsState ?? items.map((child) => child.value)}
      collapsible
      onValueChange={onToggle}
      variation={variation}
      style={{
        isolation: 'isolate',
      }}
    >
      {items.map((child: IAccordionItem) => (
        <Accordion.Item key={child.value} asChild value={child.value}>
          <StyledItem
            variation={variation}
            headerBg={child.headerBg}
            overflow='hidden'
            borderRadius='12px'
            marginBottom='12px'
          >
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
        </Accordion.Item>
      ))}
    </StyledAccordionRoot>
  ) : null
}

export default PclnAccordion
