import styled from 'styled-components'
import { applyVariations, getPaletteColor, deprecatedColorValue } from './utils'

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${getPaletteColor('base')};

  &:hover {
    color: ${getPaletteColor('dark')};
    text-decoration: underline;
  }

  ${applyVariations('Link')}
`

Link.displayName = 'Link'

Link.defaultProps = {
  color: 'primary'
}

Link.propTypes = {
  color: deprecatedColorValue()
}

export default Link
