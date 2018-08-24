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
    <path d="M12,17.8l6.2,3.7l-1.6-7L22,9.7l-7.2-0.6L12,2.5L9.2,9.1L2,9.7l5.5,4.8l-1.6,7L12,17.8z" />
  </svg>
)

const StarIcon = styled(Icon)([], space, color)

StarIcon.displayName = 'StarIcon'

StarIcon.defaultProps = {
  size: 24
}

export default StarIcon
