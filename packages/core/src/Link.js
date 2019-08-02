import styled from 'styled-components'
import { applyVariations, getPaletteColor } from './utils'

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${getPaletteColor('base')};

  &:hover {
    text-decoration: underline;
  }

  ${applyVariations('Link')}
`

Link.displayName = 'Link'

Link.defaultProps = {
  color: 'primary'
}

export default Link
