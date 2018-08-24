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
    <path d="M8.6,15.6l-4.2-4.2L3,12.8l5.6,5.6l12-12L19.2,5L8.6,15.6z" />
  </svg>
)

const CheckIcon = styled(Icon)([], space, color)

CheckIcon.displayName = 'CheckIcon'

CheckIcon.defaultProps = {
  size: 24
}

export default CheckIcon
