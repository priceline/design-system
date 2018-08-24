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
    <path d="M8,16.6l4.6-4.6L8,7.4L9.4,6l6,6l-6,6L8,16.6z" />
  </svg>
)

const ChevronRightIcon = styled(Icon)([], space, color)

ChevronRightIcon.displayName = 'ChevronRightIcon'

ChevronRightIcon.defaultProps = {
  size: 24
}

export default ChevronRightIcon
