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
      d="M23,12h-3c0,4.4-3.6,8-8,8c-1.6,0-3-0.5-4.3-1.2l1.5-1.5C10,17.8,11,18,12,18c3.3,0,6-2.7,6-6h-3l4-4L23,12z M6,12
	c0-3.3,2.7-6,6-6c1,0,2,0.2,2.8,0.7l1.5-1.5C15,4.5,13.6,4,12,4c-4.4,0-8,3.6-8,8H1l4,4l4-4H6z"
    />
  </svg>
)

const FreeCancellationIcon = styled(Icon)([], space, color)

FreeCancellationIcon.displayName = 'FreeCancellationIcon'

FreeCancellationIcon.defaultProps = {
  size: 24
}

export default FreeCancellationIcon
