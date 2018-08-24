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
    <path d="M13,7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z" />
  </svg>
)

const PlusIcon = styled(Icon)([], space, color)

PlusIcon.displayName = 'PlusIcon'

PlusIcon.defaultProps = {
  size: 24
}

export default PlusIcon
