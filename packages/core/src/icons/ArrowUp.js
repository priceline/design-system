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
    <path d="M4,12l1.4,1.4L11,7.8V20h2V7.8l5.6,5.6L20,12l-8-8L4,12z" />
  </svg>
)

const ArrowUpIcon = styled(Icon)([], space, color)

ArrowUpIcon.displayName = 'ArrowUpIcon'

ArrowUpIcon.defaultProps = {
  size: 24
}

export default ArrowUpIcon
