import React, { type ComponentPropsWithRef } from 'react'
import styled, { css } from 'styled-components'
import { SpaceProps, WidthProps, compose, space, width } from 'styled-system'
import { buttonStyles, type ButtonSizes, type ButtonVariations } from '../Button/Button'
import { applyVariations, getPaletteColor } from '../utils/utils'

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

/**
 * @public
 */
export type LinkProps = WidthProps &
  SpaceProps &
  ComponentPropsWithRef<'a'> & {
    children?: React.ReactNode
    color?: string
    disabled?: boolean
    href?: string
    size?: ButtonSizes | ButtonSizes[]
    target?: string
    variation?: ButtonVariations
  }

const StyledLink = styled.a.attrs<LinkProps>(({ color, disabled, href, target, onClick, ...props }) => ({
  color: disabled ? 'text.light' : color,
  disabled,
  href: !disabled ? href : undefined,
  rel: target === '_blank' ? 'noopener' : null,
  target,
  onClick: !disabled ? onClick : () => {},
  ...props,
}))<LinkProps>`
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

/**
 * A styled anchor element for navigation and external links.
 *
 * Supports multiple visual `variation` styles (fill, outline, subtle, plain, white,
 * lightFill, link) similar to Button. Use `color` for semantic styling and `size`
 * for consistent sizing. Automatically handles disabled state styling.
 *
 * @public
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ color = 'primary', variation = 'link', size = 'medium', ...props }, ref) => (
    <StyledLink ref={ref} color={color} variation={variation} size={size} {...props} />
  )
)
Link.displayName = 'Link'
