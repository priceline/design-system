import React from 'react'
import { Flex } from '../Flex/Flex'
import { Arrow, type ArrowPosition, type ArrowProps } from './Arrow'
import { AbsoluteTransformLeft } from './Arrow.styled'

export type TopArrowsProps = {
  arrowPosition: ArrowPosition
  arrowProps: ArrowProps
}

export function TopArrows({ arrowPosition, arrowProps }: TopArrowsProps): JSX.Element {
  const isSide = arrowPosition === 'side'
  const Wrapper = isSide ? AbsoluteTransformLeft : Flex
  return ['top', 'side'].includes(arrowPosition) ? (
    <Wrapper
      justifyContent='flex-end'
      pb={isSide ? 0 : 2}
      zIndex={1}
      data-testid={isSide ? 'side-left-arrow' : 'top-arrows'}
    >
      <Arrow isLeft {...arrowProps} />
      {isSide ? null : <Arrow {...arrowProps} ml={3} />}
    </Wrapper>
  ) : null
}
