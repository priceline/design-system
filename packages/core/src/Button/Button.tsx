import { themeGet } from '@styled-system/theme-get'
import React, { type ComponentPropsWithRef } from 'react'
import styled, { css } from 'styled-components'
import {
  BoxShadowProps,
  HeightProps,
  type ResponsiveValue,
  SpaceProps,
  WidthProps,
  borderRadius,
  boxShadow,
  compose,
  fontSize,
  height,
  space,
  width,
} from 'styled-system'
import { Flex, type FlexProps } from '../Flex/Flex'
import { type BorderRadius, type BoxShadowSize } from '../theme'
import { boxShadowAttrs } from '../utils/attrs/boxShadowAttrs'
import { applySizes, applyVariations, borders, getPaletteColor, getTextColorOn } from '../utils/utils'

/**
 * @public
 */
export const borderRadiusButtonValues = ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']

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
    &:focus-visible {
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
    &&&:disabled {
      background-color: transparent;
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
      background-color: ${getPaletteColor('background.base')};
      color: ${getPaletteColor('dark')};
    }
    &:focus-visible {
      outline: 0px solid ${getPaletteColor('dark')};
      box-shadow: 0 0 0 2px ${getPaletteColor('dark')};
    }
  `,
  subtle: css`
    background-color: ${getPaletteColor('background.base')};
    color: ${getPaletteColor('base')};
    &:hover {
      background-color: ${getPaletteColor('background.tint')};
      color: ${getPaletteColor('dark')};
    }
    &:focus-visible {
      outline: 0px solid ${getPaletteColor('dark')};
      box-shadow: 0 0 0 2px ${getPaletteColor('dark')};
    }
  `,
  white: css`
    background-color: ${getPaletteColor('background.lightest')};
    color: ${getPaletteColor('base')};
    &:hover {
      background-color: ${getPaletteColor('background.base')};
      color: ${getPaletteColor('dark')};
    }
    &:focus-visible {
      outline: 0px solid ${getPaletteColor('dark')};
      box-shadow: 0 0 0 2px ${getPaletteColor('dark')};
    }
  `,
  lightFill: css`
    background-color: ${getPaletteColor('light')};
    color: ${getPaletteColor('base')};
    ${(props) =>
      props.disabled
        ? ''
        : `
      &:hover {
        background-color: ${getPaletteColor('light')(props)};
        color: ${getPaletteColor('dark')(props)};
      }`}
    &:focus-visible {
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

    &:disabled {
      background-color: ${getPaletteColor('background.light')};
      color: ${getPaletteColor('text.light')};
    }

    ${(props) => borders({ ...props, color: undefined })}
    ${(props) => compose(space, fontSize, borderRadius)(props)}
  `,
}

/**
 * @public
 */
export type ButtonSizes = 'small' | 'medium' | 'large' | 'extraLarge'

/**
 * @public
 */
export type ButtonVariations =
  | 'fill'
  | 'link'
  | 'outline'
  | 'plain'
  | 'subtle'
  | 'white'
  | 'lightFill'
  | 'input'

/**
 * @public
 */
export type StyledButtonProps = ButtonProps & { hasChildren: boolean }

/**
 * @public
 */
export type ButtonProps = WidthProps &
  HeightProps &
  SpaceProps &
  BoxShadowProps &
  ComponentPropsWithRef<'button'> & {
    color?: string
    variation?: ButtonVariations
    size?: ButtonSizes | ButtonSizes[]
    borderRadius?: BorderRadius
    boxShadowSize?: ResponsiveValue<BoxShadowSize>
    autoFocus?: boolean
    IconLeft?: React.Component | React.FC
    IconRight?: React.Component | React.FC
    flexProps?: FlexProps
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

  &:disabled {
    cursor: not-allowed;
    color: ${getPaletteColor('background.tone')};
    background-color: ${getPaletteColor('background.base')};
  }

  ${({ theme }) => applySizes(sizes, 'medium', theme.mediaQueries)};
  ${applyVariations('Button', variations)};
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
    height,
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
    height,
    'aria-label': ariaLabel || title,
    ...paddingProps,
  }
})`
  ${buttonStyles}

  ${(props) => compose(width, height, space, boxShadow)(props)}
`

// eslint-disable-next-line @typescript-eslint/naming-convention
const ButtonIcon = ({ Component, ...props }) => {
  return Component ? <Component {...props} /> : null
}

/**
 * @public
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = 'primary',
      children,
      IconLeft,
      IconRight,
      size = 'medium',
      flexProps = {},
      variation = 'fill',
      ...restProps
    },
    ref
  ) => {
    const hasChildren = React.Children.toArray(children).length > 0
    const sizeIndex = Array.isArray(size) ? size[0] : size
    const iconSize = iconButtonSizes?.[sizeIndex] ?? 24

    return (
      <StyledButton
        {...restProps}
        color={color}
        variation={variation}
        hasChildren={hasChildren}
        IconLeft={IconLeft}
        IconRight={IconRight}
        ref={ref}
        flexProps={flexProps}
        size={size}
      >
        <Flex alignItems='center' justifyContent='center' {...flexProps}>
          <ButtonIcon Component={IconLeft} size={iconSize} mr={children ? 2 : 0} />
          {children}
          <ButtonIcon Component={IconRight} size={iconSize} ml={children ? 2 : 0} />
        </Flex>
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
