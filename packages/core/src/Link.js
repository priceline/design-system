import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { applyVariant, getPaletteColor } from './utils'

const variants = {
  underline: css`
    color: ${getPaletteColor('base')};

    &:hover {
      text-decoration: underline;
    }
  `
}

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;

  ${applyVariant('Link', variants)}
`

Link.displayName = 'Link'

Link.defaultProps = {
  variant: 'underline',
  color: 'primary'
}

Link.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants))
}

export default Link
