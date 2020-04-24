import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { width, space } from 'styled-system'
import {
  mapProps,
  applyVariations,
  getPaletteColor,
  deprecatedColorValue
} from './utils'
import { buttonStyles } from '../src/Button'

const variations = {
  fill: css`
    &:hover {
      text-decoration: none;
    }
  `,
  link: css`
    cursor: pointer;
    text-decoration: none;
    color: ${getPaletteColor('base')};

    &:hover {
      color: ${getPaletteColor('dark')};
      text-decoration: underline;
    }
  `,
  outline: css`
    &:hover {
      text-decoration: none;
    }
  `
}

const Link = mapProps(({ target, ...props }) => ({
  rel: target === '_blank' ? 'noopener' : null,
  ...props
}))(styled.a`
  ${width} ${space};
  ${buttonStyles}
  ${applyVariations('Link', variations)}
`)

Link.displayName = 'Link'

Link.defaultProps = {
  color: 'primary',
  variation: 'link'
}

Link.propTypes = {
  color: deprecatedColorValue(),
  variation: PropTypes.oneOf(Object.keys(variations))
}

export default Link
