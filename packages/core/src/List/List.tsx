import styled, { css } from 'styled-components'
import { fontSize, space, width, compose } from 'styled-system'
import themeGet from '@styled-system/theme-get'
import { getPaletteColor } from '../utils'

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
]

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

const Ordered = styled('ol')`
  & > li > * {
    margin-left: ${themeGet('space.2')};
  }

  ${BaseCSS};
`

const Unordered = styled('ul')`
  ${BaseCSS};
`

const List = Unordered

List.ol = Ordered
List.ol.displayName = 'OrderedList'

List.ul = Unordered
List.ul.displayName = 'UnorderedList'

export default List
