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
      d="M11,19.9c0-4.6-0.7-6.9-2-6.9c-1.3,0-3,0-4.9,0C4.5,16.6,7.4,19.5,11,19.9z M4.1,11
	C6.7,9.7,9.4,9,12,9s5.3,0.7,7.9,2C19.4,7,16.1,4,12,4S4.6,7,4.1,11z M19.9,13c-2,0-3.6,0-4.9,0c-1.3,0-2,2.3-2,6.9
	C16.6,19.5,19.5,16.6,19.9,13z M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z"
    />
  </svg>
)

const SteeringWheelIcon = styled(Icon)([], space, color)

SteeringWheelIcon.displayName = 'SteeringWheelIcon'

SteeringWheelIcon.defaultProps = {
  size: 24
}

export default SteeringWheelIcon
