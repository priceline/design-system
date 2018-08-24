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
    <path d="M7.4,15.4l4.6-4.6l4.6,4.6L18,14l-6-6l-6,6L7.4,15.4z" />
  </svg>
)

const ChevronUpIcon = styled(Icon)([], space, color)

ChevronUpIcon.displayName = 'ChevronUpIcon'

ChevronUpIcon.defaultProps = {
  size: 24
}

export default ChevronUpIcon
