import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeGet, color } from 'styled-system'
import { applyVariant } from './utils'

const variants = {
  primary: css`
    color: ${themeGet('palette.primary.base')};

    &:hover {
      text-decoration: underline;
    }
  `,
  secondary: css`
    color: ${themeGet('palette.secondary.base')};

    &:hover {
      text-decoration: underline;
    }
  `,
  title: css`
    color: ${themeGet('palette.textPrimary')};

    &:hover {
      text-decoration: underline;
    }
  `,
  navigation: css`
    color: #556b7f;

    &:hover {
      text-decoration: none;
    }
  `
}

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;

  ${applyVariant('Link', variants)}
  ${color}
`

Link.displayName = 'Link'

Link.defaultProps = {
  variant: 'primary'
}

Link.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants))
}

export default Link
