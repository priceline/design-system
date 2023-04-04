import propTypes from '@styled-system/prop-types'
import { themeGet } from '@styled-system/theme-get'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import {
  borderRadius,
  boxShadow,
  BoxShadowProps,
  compose,
  fontSize,
  space,
  SpaceProps,
  width,
  WidthProps,
} from 'styled-system'

import { Flex } from '../Flex'

import {
  applySizes,
  applyVariations,
  borders,
  boxShadowAttrs,
  boxShadowSizeValues,
  deprecatedColorValue,
  getPaletteColor,
  getTextColorOn,
} from '../utils'

export const borderRadiusButtonValues = ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
const isValidBorderRadius = (size) => size && borderRadiusButtonValues.includes(size)

const sizes = {
  small: css`
    border-radius: ${(props) =>
      themeGet(`borderRadii.${isValidBorderRadius(props.borderRadius) ? props.borderRadius : 'action-sm'}`)(
        props
      )};
    font-size: ${themeGet('fontSizes.0')}px;
    padding: 7px 12px;
  `,
  medium: css`
    border-radius: ${(props) =>
      themeGet(`borderRadii.${isValidBorderRadius(props.borderRadius) ? props.borderRadius : 'action-md'}`)(
        props
      )};
    font-size: ${themeGet('fontSizes.1')}px;
    padding: 9.5px 18px;
  `,
  large: css`
    border-radius: ${(props) =>
      themeGet(`borderRadii.${isValidBorderRadius(props.borderRadius) ? props.borderRadius : 'action-lg'}`)(
        props
      )};
    font-size: ${themeGet('fontSizes.2')}px;
    padding: 12px 22px;
  `,
  extraLarge: css`
    border-radius: ${(props) =>
      themeGet(`borderRadii.${isValidBorderRadius(props.borderRadius) ? props.borderRadius : 'action-xl'}`)(
        props
      )};
    font-size: ${themeGet('fontSizes.2')}px;
    padding: 16px 22px;
  `,
}

const variations = {
  fill: css`
    background-color: ${(props) => getPaletteColor(props.disabled ? 'light' : 'base')(props)};
    color: ${(props) => getTextColorOn(props.disabled ? 'light' : 'base')(props)};

    &:hover {
      background-color: ${(props) => getPaletteColor(props.disabled ? 'light' : 'dark')(props)};
      ${(props) => (props.disabled ? '' : `color: ${getTextColorOn('dark')(props)};`)}
    }
    &:focus {
      outline: ${(props) => `0px solid ${getPaletteColor(props.disabled ? '' : 'dark')(props)}`};
      box-shadow: ${(props) => ` 0 0 0 2px  ${getPaletteColor(props.disabled ? '' : 'dark')(props)}`};
    }
  `,
  link: css`
    -webkit-font-smoothing: inherit;
    font-weight: ${(props) => props.theme.fontWeights.medium};
    color: ${getPaletteColor('base')};
    line-height: ${(props) => props.theme.lineHeights.standard};
    vertical-align: inherit;
    padding: 0;
    background-color: transparent;
    &:hover {
      color: ${getPaletteColor('dark')};
      text-decoration: underline;
    }
  `,
  outline: css`
    color: ${(props) => getPaletteColor(props.disabled ? 'light' : 'base')(props)};
    box-shadow: inset 0 0 0 2px ${(props) => getPaletteColor(props.disabled ? 'light' : 'base')(props)};
    background-color: transparent;

    &:hover {
      background-color: transparent;
      ${(props) =>
        props.disabled
          ? ''
          : `
      color: ${getPaletteColor('dark')(props)};
      box-shadow: inset 0 0 0 2px ${getPaletteColor('dark')(props)};
    `}
    }
  `,
  plain: css`
    background-color: transparent;
    color: ${getPaletteColor('base')};
    &:hover {
      background-color: ${getPaletteColor('background.light')};
      color: ${getPaletteColor('dark')};
    }
    &:focus {
      outline: 0px solid ${getPaletteColor('dark')};
      box-shadow: 0 0 0 2px ${getPaletteColor('dark')};
    }
  `,
  subtle: css`
    background-color: ${getPaletteColor('background.base')};
    color: ${getPaletteColor('base')};
    &:hover {
      background-color: ${getPaletteColor('background.light')};
      color: ${getPaletteColor('dark')};
    }
    &:focus {
      outline: 0px solid ${getPaletteColor('dark')};
      box-shadow: 0 0 0 2px ${getPaletteColor('dark')};
    }
  `,
  white: css`
    background-color: ${getPaletteColor('background.lightest')};
    color: ${getPaletteColor('base')};
    &:hover {
      background-color: ${getPaletteColor('background.light')};
      color: ${getPaletteColor('dark')};
    }
    &:focus {
      outline: 0px solid ${getPaletteColor('dark')};
      box-shadow: 0 0 0 2px ${getPaletteColor('dark')};
    }
  `,
  lightFill: css`
    background-color: ${getPaletteColor('light')};
    color: ${getPaletteColor('base')};
    &:hover {
      background-color: ${getPaletteColor('light')};
      color: ${getPaletteColor('dark')};
    }
    &:focus {
      outline: ${(props) => `0px solid ${getPaletteColor(props.disabled ? '' : 'dark')(props)}`};
      box-shadow: ${(props) => ` 0 0 0 2px  ${getPaletteColor(props.disabled ? '' : 'dark')(props)}`};
    }
  `,
  input: css`
    appearance: none;
    background-color: transparent;
    border-style: solid;
    border-width: 1px;
    color: ${getPaletteColor('text.base')};
    display: block;
    font-family: inherit;
    font-weight: normal;
    line-height: normal;
    margin: 0;
    padding: 14px 12px;
    text-align: left;
    width: 100%;

    ${(props) => borders({ ...props, color: undefined })}
    ${(props) => compose(space, fontSize, borderRadius)(props)}
  `,
}

const buttonPropTypes = {
  ...propTypes.width,
  ...propTypes.space,
  ...propTypes.boxShadow,
  color: deprecatedColorValue(),
  variation: PropTypes.oneOf(Object.keys(variations)),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge']),
  disabled: PropTypes.bool,
  borderRadius: PropTypes.oneOf(borderRadiusButtonValues),
  boxShadowSize: PropTypes.oneOf(['', ...boxShadowSizeValues]),
}

export type Sizes = 'small' | 'medium' | 'large' | 'extraLarge'
export type StyledButtonProps = IButtonProps & { hasChildren: boolean }
export interface IButtonProps
  extends WidthProps,
    SpaceProps,
    BoxShadowProps,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<unknown> {
  color?: string
  variation?: 'fill' | 'link' | 'outline' | 'plain' | 'subtle' | 'white' | 'lightFill' | 'input'
  size?: Sizes | Sizes[]
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | ''
  boxShadowSize?: '' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'overlay-lg' | 'overlay-xl'
  autoFocus?: boolean
  IconLeft?: React.Component
  IconRight?: React.Component
  onClick?: (unknown) => unknown
  onFocus?: (unknown) => unknown
  onMouseEnter?: (unknown) => unknown
}

export const buttonStyles = css`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 1.5;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  border-radius: ${(props) =>
    themeGet(`borderRadii.${isValidBorderRadius(props.borderRadius) ? props.borderRadius : 'action-md'}`)(
      props
    )};
  border-width: 0;
  border-style: solid;

  ${({ theme }) => applySizes(sizes, 'medium', theme.mediaQueries)};
  ${applyVariations('Button', variations)};

  &:disabled {
    cursor: not-allowed;
    color: ${getPaletteColor('text.light')};
    background-color: ${getPaletteColor('background.base')};
  }
`

const iconButtonPaddings = {
  IconLeft: {
    small: { p: '6px 14px 6px 10px' },
    medium: { p: '8px 20px 8px 16px' },
    large: { p: '12px 24px 12px 20px' },
    extraLarge: { p: '16px 24px 16px 20px' },
  },
  IconRight: {
    small: { p: '6px 10px 6px 14px' },
    medium: { p: '8px 16px 8px 20px' },
    large: { p: '12px 20px 12px 24px' },
    extraLarge: { p: '16px 20px 16px 24px' },
  },
  both: {
    small: { p: '6px 10px' },
    medium: { p: '8px 16px' },
    large: { p: '12px 20px' },
    extraLarge: { p: '16px 20px' },
  },
}
const iconOnlyButtonPaddings = {
  small: { px: '6px', py: '6px' },
  medium: { px: '8px', py: '8px' },
  large: { px: '12px', py: '12px' },
  extraLarge: { px: '16px', py: '16px' },
}
const iconButtonSizes = {
  small: 20,
  medium: 24,
  large: 24,
  extraLarge: 24,
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function getPaddingProps({ IconLeft, IconRight, size, variation, hasChildren }: StyledButtonProps) {
  const hasIcon = !!(IconLeft || IconRight)
  const sizeIndex = Array.isArray(size) ? size[0] : size

  if (variation === 'link') {
    return { p: 0 }
  }

  if (hasIcon) {
    if (hasChildren) {
      if (IconLeft && IconRight) {
        return iconButtonPaddings.both[sizeIndex]
      } else if (IconLeft) {
        return iconButtonPaddings.IconLeft[sizeIndex]
      } else if (IconRight) {
        return iconButtonPaddings.IconRight[sizeIndex]
      }
      return {}
    } else {
      return iconOnlyButtonPaddings?.[sizeIndex] ?? {}
    }
  }

  return {}
}

/**
 * Use the <Button /> component to render a primitive button. Use the `variation` prop to change the look of the button.
 */
const StyledButton: React.FC<StyledButtonProps> = styled.button.attrs((props) => {
  const {
    width,
    title,
    'aria-label': ariaLabel,
    borderRadius,
    IconLeft,
    IconRight,
    size,
    variation,
    hasChildren,
  } = props

  const paddingProps = getPaddingProps({ IconLeft, IconRight, size, variation, hasChildren })

  return {
    borderRadius,
    ...boxShadowAttrs(props),
    width,
    'aria-label': ariaLabel || title,
    ...paddingProps,
  }
})`
  ${buttonStyles}

  ${(props) => compose(width, space, boxShadow)(props)}
`

// eslint-disable-next-line @typescript-eslint/naming-convention
const ButtonIcon = ({ Component, ...props }) => {
  return Component ? <Component {...props} /> : null
}

const Button = React.forwardRef((props: IButtonProps, ref) => {
  const { children, ...restProps } = props
  const { IconLeft, IconRight, size = 'medium' } = props
  const hasChildren = React.Children.toArray(children).length > 0
  const sizeIndex = Array.isArray(size) ? size[0] : size
  const iconSize = iconButtonSizes?.[sizeIndex] ?? 24

  return (
    <StyledButton {...restProps} hasChildren={hasChildren} ref={ref}>
      <Flex alignItems='center' justifyContent='center'>
        <ButtonIcon Component={IconLeft} size={iconSize} mr={children ? 2 : 0} />
        {children}
        <ButtonIcon Component={IconRight} size={iconSize} ml={children ? 2 : 0} />
      </Flex>
    </StyledButton>
  )
})

Button.propTypes = buttonPropTypes

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  variation: 'fill',
}

Button.displayName = 'Button'

export default Button
