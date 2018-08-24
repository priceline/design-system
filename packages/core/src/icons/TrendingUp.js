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
    <path d="M16,6l2.3,2.3l-4.9,4.9l-4-4L2,16.6L3.4,18l6-6l4,4l6.3-6.3L22,12V6H16z" />
  </svg>
)

const TrendingUpIcon = styled(Icon)([], space, color)

TrendingUpIcon.displayName = 'TrendingUpIcon'

TrendingUpIcon.defaultProps = {
  size: 24
}

export default TrendingUpIcon
