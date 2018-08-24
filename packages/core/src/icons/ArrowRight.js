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
    <path d="M12,4l-1.4,1.4l5.6,5.6H4v2h12.2l-5.6,5.6L12,20l8-8L12,4z" />
  </svg>
)

const ArrowRightIcon = styled(Icon)([], space, color)

ArrowRightIcon.displayName = 'ArrowRightIcon'

ArrowRightIcon.defaultProps = {
  size: 24
}

export default ArrowRightIcon
