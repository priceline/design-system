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
      d="M12,1l9,4v6c0,5.5-3.8,10.7-9,12c-5.2-1.3-9-6.5-9-12V5L12,1z M17,13.7v-1.1l-4.2-2.8v-3
	C12.8,6.4,12.4,6,12,6s-0.8,0.4-0.8,0.8v3L7,12.6v1.1l4.2-1.4v3l-1.1,0.8V17l1.8-0.5l1.8,0.5v-0.8l-1.1-0.8v-3L17,13.7z"
    />
  </svg>
)

const FlightCoverageIcon = styled(Icon)([], space, color)

FlightCoverageIcon.displayName = 'FlightCoverageIcon'

FlightCoverageIcon.defaultProps = {
  size: 24
}

export default FlightCoverageIcon
