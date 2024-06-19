import React from 'react'
import styled, { css } from 'styled-components'
import { SpaceProps, WidthProps, compose, space, width } from 'styled-system'
import { buttonStyles, type ButtonSizes, type ButtonVariations } from '../Button/Button'
import { applyVariations, getPaletteColor } from '../utils/utils'

const variations = {
  fill: css<LinkProps>`
    &:hover {
      text-decoration: none;
    }

    ${buttonStyles}
  `,
  subtle: css<LinkProps>`
    ${buttonStyles}

    &:hover {
      text-decoration: none;
      background-color: ${getPaletteColor('background.tint')};
    }
  `,
  link: css<LinkProps>`
    cursor: pointer;
    text-decoration: none;
    color: ${getPaletteColor('base')};

    &:hover {
      color: ${getPaletteColor('dark')};
      text-decoration: underline;
    }
  `,
  outline: css<LinkProps>`
    &:hover {
      text-decoration: none;
    }

    ${buttonStyles}
  `,
  plain: css<LinkProps>`
    ${buttonStyles}

    &:hover {
      text-decoration: none;
      background-color: ${getPaletteColor('background.base')};
    }
  `,
  white: css<LinkProps>`
    ${buttonStyles}

    &:hover {
      text-decoration: none;
      background-color: ${getPaletteColor('background.base')};
    }
  `,
  lightFill: css<LinkProps>`
    ${buttonStyles}
    ${(props) => {
      return props.disabled
        ? `
        background-color: ${getPaletteColor('background.base')(props)};
        color: ${getPaletteColor('text.light')(props)};`
        : ''
    }}
  `,
  input: css<LinkProps>`
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

/**
 * @public
 */
export type LinkProps = WidthProps &
  SpaceProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.RefAttributes<unknown> & {
    children?: React.ReactNode | string
    color?: string
    disabled?: boolean
    href?: string
    size?: ButtonSizes | ButtonSizes[]
    target?: string
    variation?: ButtonVariations
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
    onFocus?: React.FocusEventHandler<HTMLAnchorElement>
  }

/**
 * @public
 */
export const Link: React.FC<LinkProps> = styled.a.attrs<LinkProps, LinkProps>(
  ({ color, disabled, href, target, onClick, ...props }) => ({
    color: disabled ? 'text.light' : color,
    disabled,
    href: !disabled ? href : undefined,
    rel: target === '_blank' ? 'noopener' : null,
    target,
    onClick: !disabled ? onClick : () => {},
    ...props,
  })
)<LinkProps>`
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
