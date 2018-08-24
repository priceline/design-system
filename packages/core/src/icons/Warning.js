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
      d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M13,13h-2V7h2V13z M13,17h-2v-2
	h2V17z"
    />
  </svg>
)

const WarningIcon = styled(Icon)([], space, color)

WarningIcon.displayName = 'WarningIcon'

WarningIcon.defaultProps = {
  size: 24
}

export default WarningIcon
