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
      d="M4,18v3h3v-3h10v3h3v-6H4V18z M19,10h3v3h-3V10z M2,10h3v3H2V10z M17,13H7V5c0-1.1,0.9-2,2-2h6
	c1.1,0,2,0.9,2,2V13z"
    />
  </svg>
)

const SeatIcon = styled(Icon)([], space, color)

SeatIcon.displayName = 'SeatIcon'

SeatIcon.defaultProps = {
  size: 24
}

export default SeatIcon
