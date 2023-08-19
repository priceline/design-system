import themeGet from '@styled-system/theme-get'
import { ForwardRefComponent, HTMLMotionProps, motion } from 'framer-motion'
import { Close } from 'pcln-icons'
import React from 'react'
import styled, { css } from 'styled-components'

import type { ICloseButtonProps } from '..'
import { ComposedStyleFns, getPaletteColor } from '..'

export const closeButtonSizes = ['sm', 'md', 'lg'] as const
export type CloseButtonSize = (typeof closeButtonSizes)[number] | number
export type MotionButtonProps = HTMLMotionProps<'button'> & ICloseButtonProps

export const closeButtonIconSizes: Record<CloseButtonSize, number> = {
  sm: 20,
  md: 24,
  lg: 32,
}

export const filledVariationSizes: Record<CloseButtonSize, number> = {
  sm: 32,
  md: 40,
  lg: 48,
}

// The following should be true to adhere to WCAG guidelines for minimum clickable size:
// 2 * closeButtonInteractionPadding + closeButtonIconSizes.sm >= 44
const clickablePaddingPx = 24

export const closeButtonVariants = ['filled', 'white'] as const
export type CloseButtonVariant = (typeof closeButtonVariants)[number]
export const closeButtonVariantProps: Record<CloseButtonVariant, Omit<ICloseButtonProps, 'variant'>> = {
  filled: { bgColor: 'background.lightest', boxShadowSize: 'sm', color: 'primary.base' },
  white: { color: 'text.lightest' },
} as const

function clickableAreaCss({ size, variant }: MotionButtonProps) {
  const position = variant === 'filled' ? -6 : -12
  let heightWidthPx = (typeof size === 'number' ? size : closeButtonIconSizes[size]) + clickablePaddingPx

  // clickable area should never be larger than 48px for named sizes
  heightWidthPx = closeButtonIconSizes[size] && heightWidthPx >= 48 ? 48 : heightWidthPx

  return css`
    &:after {
      content: '';
      position: absolute;
      width: ${heightWidthPx}px;
      height: ${heightWidthPx}px;
      top: -${position}px;
      left: -${position}px;
    }
  `
}

export const MotionButton: ForwardRefComponent<HTMLButtonElement, MotionButtonProps> = styled(motion.button)`
  all: unset;
  ${ComposedStyleFns}

  display: grid;
  place-items: center;
  border-radius: 100%;
  cursor: pointer;
  border-sizing: border-box;
  position: relative;
  box-shadow: ${(props: MotionButtonProps) => themeGet(`shadows.${props.boxShadowSize}`)(props)};
  color: ${(props: MotionButtonProps) => themeGet(`palette.${props.color}`)(props)};
  background-color: ${(props: MotionButtonProps) => themeGet(`palette.${props.bgColor}`)(props)};

  &:focus-visible {
    outline: 2px solid ${(props: MotionButtonProps) => themeGet(`palette.${props.color}`)(props)};
  }

  ${clickableAreaCss}

  ${({ variant, size }) => {
    if (variant === 'filled') {
      return css`
        height: ${filledVariationSizes[size]}px;
        width: ${filledVariationSizes[size]}px;
      `
    }
  }}

  ${({ variant }) =>
    variant === 'filled' &&
    css`
      &:hover {
        box-shadow: ${(props: MotionButtonProps) => themeGet(`shadows.xl`)(props)};
      }
      &:hover > svg {
        color: ${getPaletteColor('primary.dark')};
      }
    `}
`

export const BackgroundAnimation: ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<'div'>> = styled(
  motion.div
)`
  height: 125%;
  width: 125%;
  background: black;
  border-radius: 100%;
  mix-blend-mode: multiply;
  position: absolute;
  opacity: 0.15;
`

type CloseIconProps = { size: CloseButtonSize } & React.SVGProps<SVGElement>
export const CloseIcon: ForwardRefComponent<SVGElement, CloseIconProps> = styled(Close)`
  width: ${({ size }: CloseIconProps) => (typeof size === 'number' ? size : closeButtonIconSizes[size])}px;
  z-index: 0;
  border-radius: 100%;
`
