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
    <path
      d="M6,21c-0.6,0-1-0.4-1-1V3l0,0c0-0.6,0.4-1,1-1l0,0h12c0.6,0,1,0.4,1,1v17c0,0.6-0.4,1-1,1v1h-2
	v-1H8v1H6V21z M19,9V8H5v1H19z M7,4v2h2V4H7z M7,11v6h2v-6H7z"
    />
  </svg>
)

const FridgeIcon = styled(Icon)([], space, color)

FridgeIcon.displayName = 'FridgeIcon'

FridgeIcon.defaultProps = {
  size: 24
}

export default FridgeIcon
