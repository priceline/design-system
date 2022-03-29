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

ArrowButton.defaultProps = {
  buttonBackground: 'background.lightest',
  buttonColor: 'primary.base',
  buttonHoverBackground: 'background.base',
  buttonHoverColor: 'primary.dark',
  buttonSize: '60px',
}

ArrowButton.propTypes = {
  type: PropTypes.oneOf(['prev', 'next']),
  position: PropTypes.oneOf(['side', 'top', 'bottom', 'hide']),
  setPosition: PropTypes.oneOf(['side', 'top', 'bottom', 'hide']),
  /** color.shade pattern to be passed to getPaletteColor */
  buttonBackground: PropTypes.string,
  /** color.shade pattern to be passed to getPaletteColor */
  buttonColor: PropTypes.string,
  /** color.shade pattern to be passed to getPaletteColor */
  buttonHoverBackground: PropTypes.string,
  /** color.shade pattern to be passed to getPaletteColor */
  buttonHoverColor: PropTypes.string,
  /** same value used for button width and button height */
  buttonSize: PropTypes.string,
}

export { ArrowButton }
