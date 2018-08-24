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
    <path d="M3.5,18.5l6-6l4,4L22,6.9l-1.4-1.4l-7.1,8l-4-4L2,17L3.5,18.5z" />
  </svg>
)

const GraphIcon = styled(Icon)([], space, color)

GraphIcon.displayName = 'GraphIcon'

GraphIcon.defaultProps = {
  size: 24
}

export default GraphIcon
