import React, { MouseEventHandler, useState } from 'react'
import { type HTMLMotionProps } from 'framer-motion'
import { Relative } from '../Relative/Relative'
import { type BoxShadowSize, type IStyledSystemProps, type PaletteColor } from '../theme/theme'
import {
  BackgroundAnimation,
  CloseButtonSize,
  CloseButtonVariant,
  CloseIcon,
  MotionButton,
  closeButtonVariantProps,
} from './CloseButton.styled'

/**
 * @public
 */
export type CloseButtonProps = IStyledSystemProps & {
  animate?: boolean
  bgColor?: PaletteColor
  boxShadowSize?: BoxShadowSize
  className?: string
  color?: PaletteColor
  onClick?: MouseEventHandler<HTMLButtonElement>
  size?: CloseButtonSize
  title?: string
  variant?: CloseButtonVariant
  as?: unknown
}

/** @public */
export type MotionButtonProps = HTMLMotionProps<'button'> & CloseButtonProps

/**
 * @public
 */
export const CloseButton = ({
  animate = true,
  bgColor,
  boxShadowSize,
  className,
  color,
  onClick,
  size = 'md',
  title = 'close',
  variant,
  as,
  ...props
}: MotionButtonProps) => {
  const [hover, setHover] = useState(false)

  return (
    <Relative>
      <MotionButton
        bgColor={bgColor}
        boxShadowSize={boxShadowSize}
        className={className}
        color={color}
        onHoverEnd={() => setHover(false)}
        onHoverStart={() => setHover(true)}
        variant={variant}
        size={size}
        onClick={onClick}
        title={title}
        {...closeButtonVariantProps[variant]}
        {...props}
      >
        {animate && variant !== 'filled' && (
          <BackgroundAnimation initial={{ scale: 0 }} animate={hover ? { scale: 1 } : { scale: 0 }} />
        )}
        <CloseIcon size={size} />
      </MotionButton>
    </Relative>
  )
}
