import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { width, space, WidthProps, SpaceProps } from 'styled-system'

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
  color: deprecatedColorValue(),
  variation: PropTypes.oneOf(Object.keys(variations)),
}

export interface ILinkProps
  extends WidthProps,
    SpaceProps,
    React.HTMLAttributes<HTMLAnchorElement>,
    React.RefAttributes<unknown> {
  color?: string
  href?: string
  variation?: 'fill' | 'link' | 'outline'
  children?: React.ReactNode | string
  onFocus?: (unknown) => unknown
  onClick?: (unknown) => unknown
  target?: string
  size?: 'small' | 'medium' | 'large'
}

const Link: React.FC<ILinkProps> = styled.a.attrs(({ target, ...props }) => ({
  rel: target === '_blank' ? 'noopener' : null,
  target,
  ...props,
}))`
  ${applyVariations('Link', variations)}
  ${width} ${space};
`

Link.displayName = 'Link'

Link.defaultProps = {
  color: 'primary',
  variation: 'link',
  size: 'medium',
}

Link.propTypes = propTypes

export default Link
