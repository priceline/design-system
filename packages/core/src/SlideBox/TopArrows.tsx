import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '../Flex'
import { Arrow } from './Arrow'
import { AbsoluteTransformLeft } from './Arrow.styles'
import { arrowPropTypes } from './Arrow'
import { ITArrowProps } from './Arrow'

export interface ITTopArrowProps {
  arrowPosition: string
  arrowProps: ITArrowProps
}

const TopArrows: React.FC<ITTopArrowProps> = ({ arrowPosition, arrowProps }) => {
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

TopArrows.propTypes = {
  arrowPosition: PropTypes.string,
  arrowProps: PropTypes.shape(arrowPropTypes),
}

export { TopArrows }
