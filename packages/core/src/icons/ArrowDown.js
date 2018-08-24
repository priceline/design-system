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
    <path d="M20,12l-1.4-1.4L13,16.2V4h-2v12.2l-5.6-5.6L4,12l8,8L20,12z" />
  </svg>
)

const ArrowDownIcon = styled(Icon)([], space, color)

ArrowDownIcon.displayName = 'ArrowDownIcon'

ArrowDownIcon.defaultProps = {
  size: 24
}

export default ArrowDownIcon
