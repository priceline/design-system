import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Flex } from '../Flex'
import { Arrow } from './Arrow'
import { AbsoluteTransformRight } from './Arrow.styles'
import { arrowPropTypes } from './Arrow'

const propTypes = {
  arrowPosition: PropTypes.bool,
  action: PropTypes.shape(arrowPropTypes),
}

const BottomArrows: React.FC<InferProps<typeof propTypes>> = ({ arrowPosition, arrowProps }) => {
  const isSide = arrowPosition === 'side'
  const Wrapper = isSide ? AbsoluteTransformRight : Flex
  return ['bottom', 'side'].includes(arrowPosition) ? (
    <Wrapper justifyContent='center' pt={isSide ? 0 : 2} right={0}>
      {isSide ? null : <Arrow mr={3} isLeft {...arrowProps} />}
      <Arrow {...arrowProps} />
    </Wrapper>
  ) : null
}

export { BottomArrows }
