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
      d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M10.3,16.5L6,12.2L7.2,11
	l3.1,3.1l6.5-6.5L18,8.8L10.3,16.5z"
    />
  </svg>
)

const SuccessIcon = styled(Icon)([], space, color)

SuccessIcon.displayName = 'SuccessIcon'

SuccessIcon.defaultProps = {
  size: 24
}

export default SuccessIcon
