import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled, { css } from 'styled-components'
import { fontSize, fontWeight, width, space } from 'styled-system'

import { buttonStyles } from '../Button'
import { applyVariations, getPaletteColor, deprecatedColorValue } from '../utils'

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

const propTypes = {
  ...fontSize.propTypes,
  color: deprecatedColorValue(),
  variation: PropTypes.oneOf(Object.keys(variations)),
}

const Link: React.FC<InferProps<typeof propTypes>> = styled.a.attrs(({ target, ...props }) => ({
  rel: target === '_blank' ? 'noopener' : null,
  target,
  ...props,
}))`
  ${applyVariations('Link', variations)}
  ${fontSize} ${fontWeight} ${width} ${space};
`

Link.displayName = 'Link'

Link.defaultProps = {
  color: 'primary',
  fontSize: 2,
  fontWeight: 'normal',
  variation: 'link',
  size: 'medium',
}

Link.propTypes = propTypes

export default Link
