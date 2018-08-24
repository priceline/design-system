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
      d="M20,12c0,1.1,0.9,2,2,2v4c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2v-4c1.1,0,2-0.9,2-2s-0.9-2-2-2V6
	c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v4C20.9,10,20,10.9,20,12z M17,14.2v-1.1l-4.2-2.8v-3c0-0.5-0.4-0.8-0.8-0.8s-0.8,0.4-0.8,0.8v3
	L7,13.1v1.1l4.2-1.4v3l-1.1,0.8v0.8L12,17l1.8,0.5v-0.8l-1.1-0.8v-3L17,14.2z"
    />
  </svg>
)

const SplitTicketIcon = styled(Icon)([], space, color)

SplitTicketIcon.displayName = 'SplitTicketIcon'

SplitTicketIcon.defaultProps = {
  size: 24
}

export default SplitTicketIcon
