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
      d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8
	s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z M12.5,12.2l4.5,2.7l-0.8,1.2L11,13V7h1.5V12.2z"
    />
  </svg>
)

const ClockIcon = styled(Icon)([], space, color)

ClockIcon.displayName = 'ClockIcon'

ClockIcon.defaultProps = {
  size: 24
}

export default ClockIcon
