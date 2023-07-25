import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '../Flex'
import { Arrow } from './Arrow'
import { AbsoluteTransformRight } from './Arrow.styles'
import { arrowPropTypes } from './Arrow'
import { ITArrowProps } from './Arrow'

export interface ITBottomArrowProps {
  arrowPosition: 'top' | 'bottom' | 'side' | 'hide'
  arrowProps: ITArrowProps
}

const BottomArrows: React.FC<ITBottomArrowProps> = ({ arrowPosition, arrowProps }) => {
  const isSide = arrowPosition === 'side'
  const Wrapper = isSide ? AbsoluteTransformRight : Flex
  return ['bottom', 'side'].includes(arrowPosition) ? (
    <Wrapper justifyContent='center' pt={isSide ? 0 : 2} right={0}>
      {isSide ? null : <Arrow mr={3} isLeft {...arrowProps} />}
      <Arrow {...arrowProps} />
    </Wrapper>
  ) : null
}

BottomArrows.propTypes = {
  arrowPosition:  PropTypes.oneOf(['top', 'bottom', 'side', 'hide', undefined]),
  arrowProps: PropTypes.shape(arrowPropTypes),
}

export { BottomArrows }
