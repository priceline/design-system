import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'pcln-design-system'

const PopoverArrow = ({
  arrowProps,
  placement,
  background,
  borderColor,
  className
}) => (
  <Arrow
    className={className}
    innerRef={arrowProps.ref}
    style={arrowProps.style}
    data-placement={placement}
    theme={theme}
    background={background}
    borderColor={borderColor}
    aria-hidden="true"
  />
)

const ArrowAlignment = () =>
  `
    &[data-placement*="right"] {
      left: 0;
    }
    &[data-placement*="left"] {
      right: 0;
    }
    &[data-placement*="top"] {
      bottom: 0;
    }
    &[data-placement*="bottom"] {
      top: 0;
    }
    &[data-placement*="bottom"]::before,
    &[data-placement*="right"]::before,
    &[data-placement*="top"]::after,
    &[data-placement*="left"]::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      margin: auto;
      border-style: solid;
      transform-origin: 0 0;
      transform: rotate(-45deg);
      border-width: 6px;
    }
  `

const ArrowPlacement = ({ background, borderColor }) => {
  const bgColor = theme.colors[background]
  const brColor = theme.colors[borderColor]

  return `
    &[data-placement*="right"]::before {
      left: 8px;
      border-color: ${bgColor} transparent transparent ${bgColor};
      box-shadow: -0.75px -0.75px 0px 0.25px ${brColor};
    }
    &[data-placement*="left"]::after {
      right: 13px;
      border-color: transparent ${bgColor} ${bgColor} transparent;
      box-shadow: 0.75px 0.75px 0px 0.25px ${brColor};
    }
    &[data-placement*="top"]::after {
      top: -16px;
      margin-left: -5px;
      border-color: transparent transparent ${bgColor} ${bgColor};
      box-shadow: -0.75px 0.75px 0px 0.25px ${brColor};
    }
    &[data-placement*="bottom"]::before {
      top: 16px;
      margin-left: -5px;
      border-color: ${bgColor} ${bgColor} transparent transparent;
      box-shadow: 0.75px -0.75px 0px 0.25px ${brColor};
    }
  `
}
const Arrow = styled.span`
  position: absolute;
  ${ArrowAlignment}
  ${ArrowPlacement}
`

PopoverArrow.propTypes = {
  arrowProps: PropTypes.shape({
    ref: PropTypes.func,
    style: PropTypes.object
  }).isRequired,
  className: PropTypes.string,
  bg: PropTypes.string,
  borderColor: PropTypes.string,
  placement: PropTypes.string
}

PopoverArrow.defaultProps = {
  bg: 'white',
  borderColor: 'borderGray',
  placement: 'top'
}

export default PopoverArrow
