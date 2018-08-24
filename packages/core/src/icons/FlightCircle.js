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
      d="M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z M17,14.2v-1.1l-4.2-2.8v-3
	c0-0.5-0.4-0.8-0.8-0.8s-0.8,0.4-0.8,0.8v3L7,13.1v1.1l4.2-1.4v3l-1.1,0.8v0.8L12,17l1.8,0.5v-0.8l-1.1-0.8v-3L17,14.2z"
    />
  </svg>
)

const FlightCircleIcon = styled(Icon)([], space, color)

FlightCircleIcon.displayName = 'FlightCircleIcon'

FlightCircleIcon.defaultProps = {
  size: 24
}

export default FlightCircleIcon
