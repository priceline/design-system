import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box/Box'

const StyledOverlay = styled(Box)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${({ overlayOpacity }) => overlayOpacity};
  cursor: pointer;
  display: ${({ popoverOpen }) => (popoverOpen ? 'block' : 'none')};
`

export type OverlayProps = {
  overlayOpacity?: number
  zIndex?: number
}

const Overlay = ({ overlayOpacity, isOpen }) => {
  return (
    <StyledOverlay
      aria-hidden='true'
      tabIndex='-1'
      popoverOpen={isOpen}
      overlayOpacity={overlayOpacity}
      color='background.darkest'
    />
  )
}

export default Overlay
