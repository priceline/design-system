import React from 'react'
import { Flex } from '../Flex/Flex'
import { Arrow, type ArrowProps } from './Arrow'
import { AbsoluteTransformRight } from './Arrow.styled'

export type BottomArrowsProps = {
  arrowPosition: 'top' | 'bottom' | 'side' | 'hide'
  arrowProps: ArrowProps
}

export function BottomArrows({ arrowPosition, arrowProps }: BottomArrowsProps): JSX.Element {
  const isSide = arrowPosition === 'side'
  const Wrapper = isSide ? AbsoluteTransformRight : Flex
  return ['bottom', 'side'].includes(arrowPosition) ? (
    <Wrapper
      justifyContent='center'
      pt={isSide ? 0 : 2}
      right={0}
      data-testid={isSide ? 'side-right-arrow' : 'bottom-arrows'}
    >
      {isSide ? null : <Arrow mr={3} isLeft {...arrowProps} />}
      <Arrow {...arrowProps} />
    </Wrapper>
  ) : null
}
