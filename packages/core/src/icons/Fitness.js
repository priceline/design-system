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
      d="M20.6,14.9l1.4-1.4L20.6,12L17,15.6L8.4,7L12,3.4L10.6,2L9.1,3.4L7.7,2L5.6,4.1L4.1,2.7L2.7,4.1l1.4,1.4L2,7.7
	l1.4,1.4L2,10.6L3.4,12L7,8.4l8.6,8.6L12,20.6l1.4,1.4l1.4-1.4l1.4,1.4l2.1-2.1l1.4,1.4l1.4-1.4l-1.4-1.4l2.1-2.1L20.6,14.9z"
    />
  </svg>
)

const FitnessIcon = styled(Icon)([], space, color)

FitnessIcon.displayName = 'FitnessIcon'

FitnessIcon.defaultProps = {
  size: 24
}

export default FitnessIcon
