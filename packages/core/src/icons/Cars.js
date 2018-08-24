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
      d="M18.9,5c-0.2-0.6-0.8-1-1.4-1h-11C5.8,4,5.3,4.4,5.1,5L3,11v8c0,0.6,0.4,1,1,1h1
	c0.5,0,1-0.4,1-1v-1h12v1c0,0.6,0.4,1,1,1h1c0.5,0,1-0.4,1-1v-8L18.9,5z M6.5,15C5.7,15,5,14.3,5,13.5S5.7,12,6.5,12S8,12.7,8,13.5
	S7.3,15,6.5,15z M17.5,15c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S18.3,15,17.5,15z M5,10l1.5-4.5h11L19,10H5z"
    />
  </svg>
)

const CarsIcon = styled(Icon)([], space, color)

CarsIcon.displayName = 'CarsIcon'

CarsIcon.defaultProps = {
  size: 24
}

export default CarsIcon
