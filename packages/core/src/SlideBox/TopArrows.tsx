import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Flex } from '../Flex'
import { Arrow } from './Arrow'
import { AbsoluteTransformLeft } from './Arrow.styles'
import { arrowPropTypes } from './Arrow'

const propTypes = {
  arrowPosition: PropTypes.bool,
  action: PropTypes.shape(arrowPropTypes),
}

const TopArrows: React.FC<InferProps<typeof propTypes>> = ({ arrowPosition, arrowProps }) => {
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

export { TopArrows }
