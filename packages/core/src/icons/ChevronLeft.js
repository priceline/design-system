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
    <path d="M15.4,16.6L10.8,12l4.6-4.6L14,6l-6,6l6,6L15.4,16.6z" />
  </svg>
)

const ChevronLeftIcon = styled(Icon)([], space, color)

ChevronLeftIcon.displayName = 'ChevronLeftIcon'

ChevronLeftIcon.defaultProps = {
  size: 24
}

export default ChevronLeftIcon
