import React from 'react'
import PropTypes from 'prop-types'
import { ChevronRight, ChevronLeft } from 'pcln-icons'
import { ARROW_SIZES } from './Arrow.styled'
import { Relative } from '../Relative'
import { Button } from '../Button'

const { bool, string, func } = PropTypes

export const arrowPropTypes = {
  isLeft: bool,
  arrowButtonVariation: string,
  size: string,
  leftArrowClick: func,
  rightArrowClick: func,
  leftDisabled: bool,
  rightDisabled: bool,
}

export interface ITArrowProps {
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

const Arrow: React.FC<ITArrowProps> = ({
  isLeft,
  arrowButtonVariation,
  size,
  leftArrowClick,
  rightArrowClick,
  leftDisabled,
  rightDisabled,
  ...props
}) => {
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

export { Arrow }
