import styled from 'styled-components'
import { applyVariations, getPaletteColor, deprecatedColorValue } from './utils'

const Link = styled.a.attrs(props => ({
  rel: props.target === '_blank' ? 'noopener' : null
}))`
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

Link.propTypes = {
  color: deprecatedColorValue()
}

export default Link
