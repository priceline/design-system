import React, { MouseEventHandler, useState } from 'react'
import { Relative, type BoxShadowSize, type IStyledSystemProps, type PaletteColor } from '..'
import {
  BackgroundAnimation,
  CloseButtonSize,
  CloseButtonVariant,
  CloseIcon,
  MotionButton,
  closeButtonVariantProps,
} from './CloseButton.styled'

export interface ICloseButtonProps extends IStyledSystemProps {
  animate?: boolean
  bgColor?: PaletteColor
  boxShadowSize?: BoxShadowSize
  className?: string
  color?: PaletteColor
  onClick?: MouseEventHandler<HTMLButtonElement>
  size?: CloseButtonSize
  title?: string
  variant?: CloseButtonVariant
}

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
  ...props
}: ICloseButtonProps) => {
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

export default CloseButton
