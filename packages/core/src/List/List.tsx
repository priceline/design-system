import styled, { css } from 'styled-components'
import { fontSize, space, width } from 'styled-system'
import themeGet from '@styled-system/theme-get'
import { getPaletteColor } from '../utils'

const BaseCSS = css`
  margin: ${themeGet('space.1')}px 0;
  color: ${getPaletteColor('base')};

  & > li {
    margin: ${themeGet('space.1')}px 0;
  }

  ${fontSize};
  ${space};
  ${width};
`

const Ordered = styled('ol')`
  ${BaseCSS};

  & > li > * {
    margin-left: ${themeGet('space.2')}px;
  }
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
