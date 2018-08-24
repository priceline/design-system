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
      d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M13,19h-2v-2h2V19z M15.1,11.2
	l-0.9,0.9C13.4,12.9,13,13.5,13,15h-2v-0.5c0-1.1,0.4-2.1,1.2-2.8l1.2-1.3C13.8,10.1,14,9.6,14,9c0-1.1-0.9-2-2-2s-2,0.9-2,2H8
	c0-2.2,1.8-4,4-4s4,1.8,4,4C16,9.9,15.6,10.7,15.1,11.2z"
    />
  </svg>
)

const HelpIcon = styled(Icon)([], space, color)

HelpIcon.displayName = 'HelpIcon'

HelpIcon.defaultProps = {
  size: 24
}

export default HelpIcon
