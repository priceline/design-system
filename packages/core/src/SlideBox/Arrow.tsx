import { ChevronLeft, ChevronRight } from 'pcln-icons'
import React from 'react'
import { Button } from '../Button/Button'
import { Relative } from '../Relative/Relative'
import { ARROW_SIZES } from './Arrow.styled'

export type ArrowProps = {
  isLeft?: boolean
  arrowButtonVariation?: 'fill' | 'link' | 'outline' | 'plain' | 'subtle' | 'white' | 'lightFill' | 'input'
  size?: string
  leftArrowClick?: (unknown) => void
  rightArrowClick?: (unknown) => void
  leftDisabled?: boolean
  rightDisabled?: boolean
  mr?: number
  ml?: number
}

export type ArrowPosition = 'top' | 'bottom' | 'side' | 'hide'

export function Arrow({
  isLeft,
  arrowButtonVariation,
  size,
  leftArrowClick,
  rightArrowClick,
  leftDisabled,
  rightDisabled,
  ...props
}: ArrowProps): React.JSX.Element {
  const Icon = isLeft ? ChevronLeft : ChevronRight
  const { buttonSize, iconSize } = ARROW_SIZES[size]
  return (
    <Relative zIndex={99}>
      <Button
        p={0}
        variation={arrowButtonVariation}
        onClick={isLeft ? leftArrowClick : rightArrowClick}
        height={buttonSize}
        width={buttonSize}
        boxShadowSize='md'
        disabled={isLeft ? leftDisabled : rightDisabled}
        {...props}
      >
        <Icon size={iconSize} pl={isLeft ? 0 : 1} pr={isLeft ? 1 : 0} />
      </Button>
    </Relative>
  )
}
