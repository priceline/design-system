import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { width, space } from 'styled-system'

import { buttonStyles } from '../Button'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
  getSCMigrationRef,
  refPropType,
} from '../utils'

const variations = {
  fill: css`
    &:hover {
      text-decoration: none;
    }

    ${buttonStyles}
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

    ${buttonStyles}
  `,
}

const StyledLink = styled.a`
  ${width} ${space};
  ${applyVariations('Link', variations)}
`
const Link = ({ target, dsRef, ...props }) => {
  const newProps = {
    [getSCMigrationRef()]: dsRef,
    rel: target === '_blank' ? 'noopener' : null,
    target,
    ...props,
  }

  return <StyledLink {...newProps} />
}

Link.displayName = 'Link'

Link.defaultProps = {
  color: 'primary',
  variation: 'link',
}

Link.propTypes = {
  color: deprecatedColorValue(),
  dsRef: refPropType,
  target: PropTypes.string,
  variation: PropTypes.oneOf(Object.keys(variations)),
}

export default Link
