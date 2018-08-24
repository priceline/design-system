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
      d="M19.4,3h-0.6h-1.4c-0.8,0-1.8,0.9-1.8,1.8H8.4c0-0.9-1-1.8-1.8-1.8H5.2H4.6H3v8.1
	c0,0.9,0.9,1.8,1.8,1.8h2c0.4,1.8,1.5,3.3,4.3,3.6v1.9c-2,0.2-2.7,1.2-2.7,2.3V21h7.2v-0.3c0-1.2-0.7-2.2-2.7-2.3v-1.9
	c2.8-0.3,4-1.8,4.3-3.6h2c0.9,0,1.8-0.9,1.8-1.8V3H19.4L19.4,3z M4.8,11.1V4.8h1.8v1.8v4.5C5.8,11.1,5.1,11.1,4.8,11.1L4.8,11.1z
	 M19.2,11.1c-0.3,0-1,0-1.8,0V6.6V4.8h1.8V11.1z"
    />
  </svg>
)

const TrophyIcon = styled(Icon)([], space, color)

TrophyIcon.displayName = 'TrophyIcon'

TrophyIcon.defaultProps = {
  size: 24
}

export default TrophyIcon
