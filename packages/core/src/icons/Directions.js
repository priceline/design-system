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
      d="M21.7,11.3l-9-9c-0.4-0.4-1-0.4-1.4,0l-9,9c-0.4,0.4-0.4,1,0,1.4l9,9c0.4,0.4,1,0.4,1.4,0l9-9
	C22.1,12.3,22.1,11.7,21.7,11.3z M14,14.5V12h-4v3H8v-4c0-0.5,0.5-1,1-1h5V7.5l3.5,3.5L14,14.5z"
    />
  </svg>
)

const DirectionsIcon = styled(Icon)([], space, color)

DirectionsIcon.displayName = 'DirectionsIcon'

DirectionsIcon.defaultProps = {
  size: 24
}

export default DirectionsIcon
