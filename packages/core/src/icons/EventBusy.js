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
      d="M9.3,18l2.4-2.4l2.4,2.4l1.1-1.1l-2.4-2.4l2.4-2.4L14.2,11l-2.4,2.4L9.3,11l-1.1,1.1l2.4,2.4
	l-2.4,2.4L9.3,18z M19,4h-1V2h-2v2H8V2H6v2H5C3.9,4,3,4.9,3,6l0,14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z
	 M19,20H5V9h14V20z"
    />
  </svg>
)

const EventBusyIcon = styled(Icon)([], space, color)

EventBusyIcon.displayName = 'EventBusyIcon'

EventBusyIcon.defaultProps = {
  size: 24
}

export default EventBusyIcon
