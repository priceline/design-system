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
      d="M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z M9.7,12.2
	c0.8,0,1.4-0.6,1.4-1.4s-0.6-1.4-1.4-1.4c-0.8,0-1.4,0.6-1.4,1.4S9,12.2,9.7,12.2z M15.2,9.4h-3.6v3.3H7.9V8.5H7v7h0.9v-1.4h8.2v1.4
	H17v-4.2C17,10.3,16.2,9.4,15.2,9.4z"
    />
  </svg>
)

const HotelCircleIcon = styled(Icon)([], space, color)

HotelCircleIcon.displayName = 'HotelCircleIcon'

HotelCircleIcon.defaultProps = {
  size: 24
}

export default HotelCircleIcon
