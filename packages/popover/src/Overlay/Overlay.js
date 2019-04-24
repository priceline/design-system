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
  opacity: ${props => (props.popoverOpen ? props.overlayOpacity : 0)};
  z-index: ${props => props.zIndex};
  cursor: pointer;
`

const Overlay = ({
  className,
  popoverOpen,
  handleClick,
  bg,
  overlayOpacity,
  zIndex
}) => {
  return (
    <StyledOverlay
      className={className}
      onClick={handleClick}
      popoverOpen={popoverOpen}
      bg={bg}
      overlayOpacity={overlayOpacity}
      zIndex={zIndex}
    />
  )
}

Overlay.propTypes = {
  className: PropTypes.string,
  popoverOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  bg: PropTypes.string,
  overlayOpacity: PropTypes.number,
  zIndex: PropTypes.number
}

Overlay.defaultProps = {
  popoverOpen: true,
  bg: 'black',
  overlayOpacity: 0,
  zIndex: 101
}

export default Overlay
