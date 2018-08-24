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
      d="M21.5,16v-2l-8-5V3.5C13.5,2.7,12.8,2,12,2s-1.5,0.7-1.5,1.5V9l-8,5v2l8-2.5V19l-2,1.5V22l3.5-1l3.5,1v-1.5
	l-2-1.5v-5.5L21.5,16z"
    />
  </svg>
)

const FlightsIcon = styled(Icon)([], space, color)

FlightsIcon.displayName = 'FlightsIcon'

FlightsIcon.defaultProps = {
  size: 24
}

export default FlightsIcon
