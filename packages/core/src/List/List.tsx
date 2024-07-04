import themeGet from '@styled-system/theme-get'
import React, { type ComponentPropsWithoutRef } from 'react'
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
  ComponentPropsWithoutRef<'ul' | 'ol'> & {
    children?: React.ReactNode
    listStyle?: ListListStyle
    indentSize?: ListIndentSize
    color?: PaletteFamilyName | PaletteColor
  }

const BaseCSS = css`
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

const Ordered: React.FC<ListProps> = styled('ol')`
  & > li > * {
    margin-left: ${themeGet('space.2')};
  }

  ${BaseCSS};
`

const Unordered: React.FC<ListProps> & { ol: React.FC<ListProps>; ul: React.FC<ListProps> } = styled('ul')`
  ${BaseCSS};
`

/**
 * @public
 */
export const List = Unordered

List.ol = Ordered
List.ol.displayName = 'OrderedList'

List.ul = Unordered
List.ul.displayName = 'UnorderedList'
