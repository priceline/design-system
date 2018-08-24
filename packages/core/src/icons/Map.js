import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Icon = ({ size, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentcolor"
  >
    <path
      d="M20.5,3h-0.2L15,5.1L9,3L3.4,4.9C3.2,5,3,5.2,3,5.4v15.1C3,20.8,3.2,21,3.5,21h0.2L9,18.9l6,2.1
	l5.6-1.9c0.2-0.1,0.4-0.2,0.4-0.5V3.5C21,3.2,20.8,3,20.5,3z M15,19l-6-2.1V5l6,2.1V19z"
    />
  </svg>
)

const MapIcon = styled(Icon)([], space, color)

MapIcon.displayName = 'MapIcon'

MapIcon.defaultProps = {
  size: 24
}

export default MapIcon
