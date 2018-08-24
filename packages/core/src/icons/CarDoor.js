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
      d="M18,2h-6.9l0,0c-0.7,0-1.3,0.3-1.7,0.9l-5,7.6l0,0C4.1,10.8,4,11.2,4,11.6V20c0,1.1,0.9,2,2,2
	h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,11H6.7l4.7-7H18V11z"
    />
  </svg>
)

const CarDoorIcon = styled(Icon)([], space, color)

CarDoorIcon.displayName = 'CarDoorIcon'

CarDoorIcon.defaultProps = {
  size: 24
}

export default CarDoorIcon
