import themeGet from '@styled-system/theme-get'
import React, { type ComponentPropsWithRef } from 'react'
import styled, { css } from 'styled-components'
import { compose, fontSize, space, width, type FontSizeProps, type SpaceProps } from 'styled-system'
import { type PaletteColor, type PaletteFamilyName } from '../theme/theme'
import { getPaletteColor } from '../utils/utils'

/**
 * @public
 */
export const tabSpacingSize = {
  xsm: '16px',
  sm: '24px',
  md: '32px',
  lg: '40px',
  xl: '48px',
}

/**
 * @public
 */
export type ListIndentSize = keyof typeof tabSpacingSize | 'none'

/**
 * @public
 */
export const listStyles = [
  'disc',
  'upper-roman',
  'lower-roman',
  'upper-alpha',
  'lower-alpha',
  'decimal',
  'square',
  'circle',
] as const

/**
 * @public
 */
export type ListListStyle = (typeof listStyles)[number]

/**
 * @public
 */
export type ListProps = FontSizeProps &
  SpaceProps &
  Omit<ComponentPropsWithRef<'ul'>, 'color'> & {
    children?: React.ReactNode
    listStyle?: ListListStyle
    indentSize?: ListIndentSize
    color?: PaletteFamilyName | PaletteColor
  }

/**
 * @public
 */
export type OrderedListProps = FontSizeProps &
  SpaceProps &
  Omit<ComponentPropsWithRef<'ol'>, 'color'> & {
    children?: React.ReactNode
    listStyle?: ListListStyle
    indentSize?: ListIndentSize
    color?: PaletteFamilyName | PaletteColor
  }

const BaseCSS = css<ListProps>`
  margin: ${themeGet('space.1')} 0;
  color: ${getPaletteColor('base')};

  & > li {
    margin: ${themeGet('space.1')} 0;
  }

  ${(props) => compose(fontSize, space, width)(props)}
  padding: 0;
  list-style-type: ${(props) =>
    props.listStyle ? (listStyles.includes(props.listStyle) ? props.listStyle : 'auto') : ''};
  margin-left: ${(props) => tabSpacingSize[props.indentSize ? props.indentSize : 'lg']};
`

const StyledOrdered = styled.ol<OrderedListProps>`
  & > li > * {
    margin-left: ${themeGet('space.2')};
  }

  ${BaseCSS};
`

const StyledUnordered = styled.ul<ListProps>`
  ${BaseCSS};
`

export const OrderedList = React.forwardRef<HTMLOListElement, OrderedListProps>((props, ref) => (
  <StyledOrdered ref={ref} {...props} />
))
OrderedList.displayName = 'OrderedList'

export const UnorderedList = React.forwardRef<HTMLUListElement, ListProps>((props, ref) => (
  <StyledUnordered ref={ref} {...props} />
))
UnorderedList.displayName = 'UnorderedList'

/**
 * Styled list components for ordered and unordered content.
 *
 * Use `List.ul` for unordered (bulleted) lists and `List.ol` for ordered (numbered)
 * lists. Supports various `listStyle` options (disc, circle, square, decimal,
 * lower-alpha, upper-roman, etc.) and nested list structures.
 *
 * @public
 */
export const List = React.forwardRef<HTMLUListElement, ListProps>(function List(props, ref) {
  return <StyledUnordered ref={ref} {...props} />
}) as React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLUListElement>> & {
  ol: typeof OrderedList
  ul: typeof UnorderedList
}
List.displayName = 'List'

List.ol = OrderedList
List.ul = UnorderedList
