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
      d="M2.5,19.5h19v2h-19V19.5z M9.7,13.8L14,15l5.3,1.4c0.8,0.2,1.6-0.3,1.8-1.1
	c0.2-0.8-0.3-1.6-1.1-1.8l-5.3-1.4l-2.8-9l-1.8-0.6v8.3l-5-1.3L4.2,7.1L2.8,6.7v5.2l1.6,0.4L9.7,13.8z"
    />
  </svg>
)

const ArrivalIcon = styled(Icon)([], space, color)

ArrivalIcon.displayName = 'ArrivalIcon'

ArrivalIcon.defaultProps = {
  size: 24
}

export default ArrivalIcon
