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
      d="M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z M16.2,7.6
	C16.1,7.3,15.8,7,15.4,7H8.6C8.2,7,7.9,7.3,7.8,7.6l-1.3,3.7v5c0,0.3,0.3,0.6,0.6,0.6h0.6c0.3,0,0.6-0.3,0.6-0.6v-0.6h7.3v0.6
	c0,0.3,0.3,0.6,0.6,0.6h0.6c0.3,0,0.6-0.3,0.6-0.6v-5L16.2,7.6z M8.6,13.9c-0.5,0-0.9-0.4-0.9-0.9S8.1,12,8.6,12s0.9,0.4,0.9,0.9
	S9.1,13.9,8.6,13.9z M15.4,13.9c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9S15.9,13.9,15.4,13.9z M7.7,10.8l0.9-2.8
	h6.7l0.9,2.8H7.7z"
    />
  </svg>
)

const CarCircleIcon = styled(Icon)([], space, color)

CarCircleIcon.displayName = 'CarCircleIcon'

CarCircleIcon.defaultProps = {
  size: 24
}

export default CarCircleIcon
