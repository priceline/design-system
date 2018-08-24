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
      d="M21,5.5H3c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1h1v1h2v-1h12v1h2v-1h1c0.6,0,1-0.4,1-1v-10
	C22,5.9,21.6,5.5,21,5.5z M15,15.5H4v-8h11V15.5z M17,15.5c-0.5,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S17.5,15.5,17,15.5z M17,12.5
	c-0.5,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S17.5,12.5,17,12.5z M17,9.5c-0.5,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S17.5,9.5,17,9.5z M20,15.5
	h-1v-8h1V15.5z"
    />
  </svg>
)

const MicrowaveIcon = styled(Icon)([], space, color)

MicrowaveIcon.displayName = 'MicrowaveIcon'

MicrowaveIcon.defaultProps = {
  size: 24
}

export default MicrowaveIcon
