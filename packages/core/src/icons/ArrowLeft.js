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
    <path d="M20,11H7.8l5.6-5.6L12,4l-8,8l8,8l1.4-1.4L7.8,13H20V11z" />
  </svg>
)

const ArrowLeftIcon = styled(Icon)([], space, color)

ArrowLeftIcon.displayName = 'ArrowLeftIcon'

ArrowLeftIcon.defaultProps = {
  size: 24
}

export default ArrowLeftIcon
