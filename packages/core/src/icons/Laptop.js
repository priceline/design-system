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
      d="M18.6,17.2c0.9,0,1.6-0.8,1.6-1.8V6.8c0-1-0.7-1.8-1.6-1.8H5.4C4.5,5,3.7,5.8,3.7,6.8v8.8
	c0,1,0.7,1.8,1.6,1.8H2V19h20v-1.8H18.6z M5.4,6.8h13.4v8.8H5.4V6.8z"
    />
  </svg>
)

const LaptopIcon = styled(Icon)([], space, color)

LaptopIcon.displayName = 'LaptopIcon'

LaptopIcon.defaultProps = {
  size: 24
}

export default LaptopIcon
