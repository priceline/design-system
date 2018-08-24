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
      d="M7.8,13.1l2.8-2.8l-7-7C2,4.9,2,7.4,3.6,9L7.8,13.1L7.8,13.1z M14.6,11.3
	c1.5,0.7,3.7,0.2,5.3-1.4c1.9-1.9,2.2-4.6,0.8-6.1c-1.5-1.5-4.2-1.1-6.1,0.8c-1.6,1.6-2.1,3.7-1.4,5.3l-9.8,9.8l1.4,1.4l6.9-6.9
	l6.9,6.9l1.4-1.4l-6.9-6.9L14.6,11.3z"
    />
  </svg>
)

const InclusiveIcon = styled(Icon)([], space, color)

InclusiveIcon.displayName = 'InclusiveIcon'

InclusiveIcon.defaultProps = {
  size: 24
}

export default InclusiveIcon
