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
      d="M16.5,12.1L15.5,11l-4.9,4.9l-2.1-2.1l-1.1,1.1l3.2,3.2L16.5,12.1L16.5,12.1z M19,4h-1V2h-2v2H8
	V2H6v2H5C3.9,4,3,4.9,3,6l0,14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20H5V9h14V20z"
    />
  </svg>
)

const EventAvailableIcon = styled(Icon)([], space, color)

EventAvailableIcon.displayName = 'EventAvailableIcon'

EventAvailableIcon.defaultProps = {
  size: 24
}

export default EventAvailableIcon
