import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBack, ButtonNext } from 'pure-react-carousel'
import { ChevronRight, ChevronLeft } from 'pcln-icons'
import { Hide } from 'pcln-design-system'
import { Wrapper } from './ArrowButton.styles'

const ArrowButton = ({ type, position, setPosition, ...props }) =>
  setPosition === position ? (
    <Hide xs sm>
      <Wrapper type={type} position={position} {...props} data-testid={`${type}-${position}`}>
        {type === 'prev' ? (
          <ButtonBack>
            <ChevronLeft size={type === 'side' ? 40 : 32} ml='-3px' />
          </ButtonBack>
        ) : (
          <ButtonNext>
            <ChevronRight size={type === 'side' ? 40 : 32} mr='-3px' />
          </ButtonNext>
        )}
      </Wrapper>
    </Hide>
  ) : null

ArrowButton.propTypes = {
  type: PropTypes.oneOf(['prev', 'next']),
  position: PropTypes.oneOf(['side', 'top', 'bottom', 'hide']),
  setPosition: PropTypes.oneOf(['side', 'top', 'bottom', 'hide']),
}

export { ArrowButton }
