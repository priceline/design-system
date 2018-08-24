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
      d="M21.4,11.6l-9-9C12.1,2.2,11.6,2,11,2H4C2.9,2,2,2.9,2,4v7c0,0.6,0.2,1.1,0.6,1.4l9,9
	c0.4,0.4,0.9,0.6,1.4,0.6s1.1-0.2,1.4-0.6l7-7c0.4-0.4,0.6-0.9,0.6-1.4S21.8,11.9,21.4,11.6z M5.5,7C4.7,7,4,6.3,4,5.5S4.7,4,5.5,4
	S7,4.7,7,5.5S6.3,7,5.5,7z M17.3,15.3L13,19.5l-4.3-4.3C8.3,14.8,8,14.2,8,13.5c0-1.4,1.1-2.5,2.5-2.5c0.7,0,1.3,0.3,1.8,0.7
	l0.7,0.7l0.7-0.7c0.5-0.4,1.1-0.7,1.8-0.7c1.4,0,2.5,1.1,2.5,2.5C18,14.2,17.7,14.8,17.3,15.3z"
    />
  </svg>
)

const LoyaltyIcon = styled(Icon)([], space, color)

LoyaltyIcon.displayName = 'LoyaltyIcon'

LoyaltyIcon.defaultProps = {
  size: 24
}

export default LoyaltyIcon
