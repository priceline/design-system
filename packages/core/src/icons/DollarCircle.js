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
      d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M13.4,18.1V20h-2.7v-1.9
	c-1.7-0.4-3.2-1.5-3.3-3.4h2c0.1,1.1,0.8,1.9,2.6,1.9c2,0,2.4-1,2.4-1.6c0-0.8-0.4-1.6-2.7-2.1c-2.5-0.6-4.2-1.6-4.2-3.7
	c0-1.7,1.4-2.8,3.1-3.2V4h2.7v1.9c1.9,0.5,2.8,1.9,2.9,3.4h-2c-0.1-1.1-0.6-1.9-2.2-1.9c-1.5,0-2.4,0.7-2.4,1.6
	c0,0.8,0.6,1.4,2.7,1.9c2,0.5,4.2,1.4,4.2,3.9C16.5,16.8,15.1,17.8,13.4,18.1z"
    />
  </svg>
)

const DollarCircleIcon = styled(Icon)([], space, color)

DollarCircleIcon.displayName = 'DollarCircleIcon'

DollarCircleIcon.defaultProps = {
  size: 24
}

export default DollarCircleIcon
