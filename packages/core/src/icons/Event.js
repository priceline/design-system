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
      d="M17,13h-5v5h5V13z M16,2v2H8V2H6v2H5C3.9,4,3,4.9,3,6l0,14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2
	V6c0-1.1-0.9-2-2-2h-1V2H16z M19,20H5V9h14V20z"
    />
  </svg>
)

const EventIcon = styled(Icon)([], space, color)

EventIcon.displayName = 'EventIcon'

EventIcon.defaultProps = {
  size: 24
}

export default EventIcon
