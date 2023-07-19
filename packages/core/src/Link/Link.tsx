import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { width, space, WidthProps, SpaceProps, compose } from 'styled-system'

import type { Sizes, Variations } from '../Button'
import { buttonStyles } from '../Button'
import { applyVariations, getPaletteColor, deprecatedColorValue } from '../utils'

const variations = {
  fill: css`
    &:hover {
      text-decoration: none;
    }

    ${buttonStyles}
  `,
  subtle: css`
    ${buttonStyles}

    &:hover {
      text-decoration: none;
      background-color: ${getPaletteColor('background.tint')};
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

    ${buttonStyles}
  `,
  plain: css`
    ${buttonStyles}

    &:hover {
      text-decoration: none;
      background-color: ${getPaletteColor('background.base')};
    }
  `,
  white: css`
    ${buttonStyles}

    &:hover {
      text-decoration: none;
      background-color: ${getPaletteColor('background.base')};
    }
  `,
  lightFill: css`
    ${buttonStyles}
    ${(props) => {
      return props.disabled
        ? `
        background-color: ${getPaletteColor('background.base')(props)};
        color: ${getPaletteColor('text.light')(props)};`
        : ''
    }}
  `,
  input: css`
    ${buttonStyles}
    text-align: center;
    ${(props) => {
      return props.disabled
        ? `
        background-color: ${getPaletteColor('background.base')(props)};
        color: ${getPaletteColor('text.light')(props)};`
        : ''
    }}
  `,
}

const propTypes = {
  color: deprecatedColorValue(),
  disabled: PropTypes.bool,
  variation: PropTypes.oneOf(Object.keys(variations)),
}

export interface ILinkProps
  extends WidthProps,
    SpaceProps,
    React.HTMLAttributes<HTMLAnchorElement>,
    React.RefAttributes<unknown> {
  children?: React.ReactNode | string
  color?: string
  disabled?: boolean
  href?: string
  size?: Sizes | Sizes[]
  target?: string
  variation?: Variations
  onClick?: (unknown) => unknown
  onFocus?: (unknown) => unknown
}

const Link: React.FC<ILinkProps> = styled.a.attrs(({ color, disabled, href, target, onClick, ...props }) => ({
  color: disabled ? 'text.light' : color,
  disabled,
  href: !disabled ? href : undefined,
  rel: target === '_blank' ? 'noopener' : null,
  target,
  onClick: !disabled ? onClick : () => {},
  ...props,
}))`
  ${applyVariations('Link', variations)}

  ${(props) =>
    props.disabled &&
    `
    cursor: default;

    &:hover {
      text-decoration: none;
    }
  `}

  ${(props) => compose(space, width)(props)}
`

Link.displayName = 'Link'

Link.defaultProps = {
  color: 'primary',
  variation: 'link',
  size: 'medium',
}

Link.propTypes = propTypes

export default Link
