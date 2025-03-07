import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBack, ButtonNext } from 'pure-react-carousel'
import { ChevronRight, ChevronLeft } from 'pcln-icons'
import { Wrapper } from './ArrowButton.styles'

const ArrowButton = ({
  buttonBackground = 'background.lightest',
  buttonColor = 'primary.base',
  buttonHoverBackground = 'background.base',
  buttonHoverColor = 'primary.dark',
  buttonSize = '60px',
  type,
  position,
  setPosition,
  showArrowsOnHover,
  ...props
}) =>
  setPosition === position ? (
    <Wrapper
      buttonBackground={buttonBackground}
      buttonColor={buttonColor}
      buttonHoverBackground={buttonHoverBackground}
      buttonHoverColor={buttonHoverColor}
      buttonSize='60px'
      type={type}
      position={position}
      {...props}
      data-testid={`${type}-${position}`}
      showArrowsOnHover={showArrowsOnHover}
    >
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
  ) : null

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
  /** When arrow position is side, hide arrows and shows when hovers on carousel */
  showArrowsOnHover: PropTypes.bool,
  /** adjust side arrow position for overflow */
  overflowAdjust: PropTypes.number,
}

export { ArrowButton }
