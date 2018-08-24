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
    <path d="M7.4,8l4.6,4.6L16.6,8L18,9.4l-6,6l-6-6L7.4,8z" />
  </svg>
)

const ChevronDownIcon = styled(Icon)([], space, color)

ChevronDownIcon.displayName = 'ChevronDownIcon'

ChevronDownIcon.defaultProps = {
  size: 24
}

export default ChevronDownIcon
