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
    <path d="M16,17v-7h-2v7h-3l4,4l4-4H16z M9,3L5,7h3v7h2V7h3L9,3z" />
  </svg>
)

const SwapIcon = styled(Icon)([], space, color)

SwapIcon.displayName = 'SwapIcon'

SwapIcon.defaultProps = {
  size: 24
}

export default SwapIcon
