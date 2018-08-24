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
      d="M6.6,10.8c1.4,2.8,3.8,5.1,6.6,6.6l2.2-2.2c0.3-0.3,0.7-0.4,1-0.2c1.1,0.4,2.3,0.6,3.6,0.6c0.5,0,1,0.4,1,1V20
	c0,0.5-0.5,1-1,1C10.6,21,3,13.4,3,4c0-0.6,0.4-1,1-1h3.5c0.6,0,1,0.4,1,1c0,1.2,0.2,2.5,0.6,3.6c0.1,0.3,0,0.7-0.2,1L6.6,10.8z"
    />
  </svg>
)

const PhoneIcon = styled(Icon)([], space, color)

PhoneIcon.displayName = 'PhoneIcon'

PhoneIcon.defaultProps = {
  size: 24
}

export default PhoneIcon
