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
      d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7
	h2V9z"
    />
  </svg>
)

const InformationIcon = styled(Icon)([], space, color)

InformationIcon.displayName = 'InformationIcon'

InformationIcon.defaultProps = {
  size: 24
}

export default InformationIcon
