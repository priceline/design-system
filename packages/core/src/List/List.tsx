import themeGet from '@styled-system/theme-get'
import React from 'react'
import styled, { css } from 'styled-components'
import { compose, fontSize, space, width, type FontSizeProps, type SpaceProps } from 'styled-system'
import { type PaletteColor, type PaletteFamilyName } from '../theme/theme'
import { getPaletteColor } from '../utils/utils'

const tabSpacingSize = {
  xsm: '16px',
  sm: '24px',
  md: '32px',
  lg: '40px',
  xl: '48px',
}

const listStyles = [
  'disc',
  'upper-roman',
  'lower-roman',
  'upper-alpha',
  'lower-alpha',
  'decimal',
  'square',
  'circle',
] as const

export type ListProps = FontSizeProps &
  SpaceProps &
  React.HTMLAttributes<HTMLOListElement | HTMLUListElement> & {
    children?: React.ReactNode
    listStyle?: (typeof listStyles)[number]
    indentSize?: keyof typeof tabSpacingSize | 'none'
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

export const List = Unordered

List.ol = Ordered
List.ol.displayName = 'OrderedList'

List.ul = Unordered
List.ul.displayName = 'UnorderedList'
