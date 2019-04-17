import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'pcln-design-system'

const StyledOverlay = styled(Link)`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${props => (props.popoverOpen ? props.opacity : 0)};
  z-indexopacity: ${props => props.zIndex};
  cursor: pointer;
`

const Overlay = ({
  className,
  popoverOpen,
  handleClick,
  bg,
  opacity,
  zIndex
}) => {
  return (
    <StyledOverlay
      className={className}
      onClick={handleClick}
      popoverOpen={popoverOpen}
      bg={bg}
      opacity={opacity}
      zIndex={zIndex}
    />
  )
}

Overlay.propTypes = {
  className: PropTypes.string,
  popoverOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  bg: PropTypes.string,
  opacity: PropTypes.number,
  zIndex: PropTypes.string
}

Overlay.defaultProps = {
  popoverOpen: true,
  bg: 'black',
  opacity: 0,
  zIndex: '101'
}

export default Overlay
