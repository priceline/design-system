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
      d="M13.5,1c0,0,0.7,2.7,0.7,4.8c0,2.1-1.3,3.7-3.4,3.7c-2.1,0-3.6-1.7-3.6-3.7l0-0.4
	C5.2,7.8,4,10.9,4,14.3c0,4.4,3.6,8,8,8s8-3.6,8-8C20,8.9,17.4,4.1,13.5,1z M11.7,19.3c-1.8,0-3.2-1.4-3.2-3.1
	c0-1.6,1.1-2.8,2.8-3.1c1.8-0.4,3.6-1.2,4.6-2.6c0.4,1.3,0.6,2.7,0.6,4C16.5,17.2,14.4,19.3,11.7,19.3z"
    />
  </svg>
)

const FlameIcon = styled(Icon)([], space, color)

FlameIcon.displayName = 'FlameIcon'

FlameIcon.defaultProps = {
  size: 24
}

export default FlameIcon
