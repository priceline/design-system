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
      d="M13.5,2v8h8C21.5,5.6,17.9,2,13.5,2z M19.8,15.9c1.1-1.4,1.7-3.1,1.7-4.9H6.9L6,9H2.5v2h2.2
	c0,0,1.9,4.1,2.1,4.4C5.7,16,5,17.2,5,18.5C5,20.4,6.6,22,8.5,22c1.8,0,3.2-1.3,3.5-3H14c0.2,1.7,1.7,3,3.5,3c1.9,0,3.5-1.6,3.5-3.5
	C21,17.5,20.5,16.5,19.8,15.9z M8.5,20C7.7,20,7,19.3,7,18.5S7.7,17,8.5,17s1.5,0.7,1.5,1.5S9.3,20,8.5,20z M17.5,20
	c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S18.3,20,17.5,20z"
    />
  </svg>
)

const CarriageIcon = styled(Icon)([], space, color)

CarriageIcon.displayName = 'CarriageIcon'

CarriageIcon.defaultProps = {
  size: 24
}

export default CarriageIcon
