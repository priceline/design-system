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
    <path d="M7,11v2h10v-2H7z" />
  </svg>
)

const MinusIcon = styled(Icon)([], space, color)

MinusIcon.displayName = 'MinusIcon'

MinusIcon.defaultProps = {
  size: 24
}

export default MinusIcon
