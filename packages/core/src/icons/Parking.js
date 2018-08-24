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
      d="M12.5,3h-7v18h4v-6h3c3.3,0,6-2.7,6-6S15.8,3,12.5,3z M12.7,11H9.5V7h3.2c1.1,0,2,0.9,2,2
	S13.8,11,12.7,11z"
    />
  </svg>
)

const ParkingIcon = styled(Icon)([], space, color)

ParkingIcon.displayName = 'ParkingIcon'

ParkingIcon.defaultProps = {
  size: 24
}

export default ParkingIcon
