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
      d="M4.5,11.5C3.1,11.5,2,10.4,2,9s1.1-2.5,2.5-2.5S7,7.6,7,9S5.9,11.5,4.5,11.5z M9,7.5
	C7.6,7.5,6.5,6.4,6.5,5S7.6,2.5,9,2.5s2.5,1.1,2.5,2.5S10.4,7.5,9,7.5z M15,7.5c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5
	s2.5,1.1,2.5,2.5S16.4,7.5,15,7.5z M19.5,11.5c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5S22,7.6,22,9S20.9,11.5,19.5,11.5z M17.3,14.4
	L17.3,14.4c1.3,1.3,2.9,2.8,2.6,4.8c-0.3,1-1,2-2.3,2.3c-0.7,0.1-3.1-0.4-5.5-0.4h-0.2c-2.5,0-4.8,0.6-5.5,0.4
	c-1.3-0.3-2-1.3-2.3-2.3c-0.3-2,1.3-3.5,2.6-4.8c0.9-1,1.6-1.9,2.5-2.9c0.5-0.5,1.1-1.1,1.8-1.3c0.1,0,0.2-0.1,0.3-0.1
	C11.5,10,11.7,10,12,10s0.5,0,0.8,0c0.1,0,0.2,0.1,0.3,0.1c0.7,0.2,1.3,0.8,1.8,1.3C15.7,12.5,16.5,13.3,17.3,14.4z"
    />
  </svg>
)

const PetsIcon = styled(Icon)([], space, color)

PetsIcon.displayName = 'PetsIcon'

PetsIcon.defaultProps = {
  size: 24
}

export default PetsIcon
