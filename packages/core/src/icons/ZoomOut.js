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
      d="M15,3l2.3,2.3l-2.9,2.9l1.4,1.4l2.9-2.9L21,9V3H15z M3,9l2.3-2.3l2.9,2.9l1.4-1.4L6.7,5.3L9,3H3
	V9z M9,21l-2.3-2.3l2.9-2.9l-1.4-1.4l-2.9,2.9L3,15v6H9z M21,15l-2.3,2.3l-2.9-2.9l-1.4,1.4l2.9,2.9L15,21h6V15z"
    />
  </svg>
)

const ZoomOutIcon = styled(Icon)([], space, color)

ZoomOutIcon.displayName = 'ZoomOutIcon'

ZoomOutIcon.defaultProps = {
  size: 24
}

export default ZoomOutIcon
