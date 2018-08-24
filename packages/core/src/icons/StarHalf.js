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
    <path d="M12,17.8V2.5L9.2,9.1L2,9.7l5.5,4.8l-1.6,7L12,17.8z" />
  </svg>
)

const StarHalfIcon = styled(Icon)([], space, color)

StarHalfIcon.displayName = 'StarHalfIcon'

StarHalfIcon.defaultProps = {
  size: 24
}

export default StarHalfIcon
