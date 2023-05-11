import styled, { css } from 'styled-components'
import { fontSize, space, width, compose } from 'styled-system'
import themeGet from '@styled-system/theme-get'
import { getPaletteColor } from '../utils'

const BaseCSS = css`
  margin: ${themeGet('space.1')} 0;
  color: ${getPaletteColor('base')};

  & > li {
    margin: ${themeGet('space.1')} 0;
  }

  ${(props) => compose(fontSize, space, width)(props)}
`

const Ordered = styled('ol')`
  ${BaseCSS};

  & > li > * {
    margin-left: ${themeGet('space.2')};
  }
`

Ordered.defaultProps = { my: 1 }

const Unordered = styled('ul')`
  ${BaseCSS};
`

Unordered.defaultProps = { my: 1 }

const List = Unordered

List.ol = Ordered
List.ol.displayName = 'OrderedList'

List.ul = Unordered
List.ul.displayName = 'UnorderedList'

export default List
