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
      d="M11.1,11.5c-0.3-0.2-0.6-0.5-0.8-0.7L8.9,9.2C8.7,9,8.5,8.9,8.2,8.7c-0.3-0.1-0.6-0.2-1-0.2h0
	C6,8.5,5,9.5,5,10.8v0.8H2v8c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-8H11.1z M7,19.5H5v-6h2V19.5z M11,19.5H9v-6h2V19.5z M15,19.5h-2
	v-6h2V19.5z M19,19.5h-2v-6h2V19.5z M18.6,5.4L18.6,5.4c-0.6-0.7-0.9-1.5-0.7-2.3L18,2.5h-1.9L16,2.9c-0.2,1.4,0.3,2.7,1.3,3.7
	l0.1,0.1c0.6,0.6,0.8,1.4,0.7,2.2L18,9.5h1.9L20,9.1C20.2,7.7,19.7,6.4,18.6,5.4L18.6,5.4z M14.6,5.4L14.6,5.4c1,1,1.5,2.3,1.3,3.7
	l-0.1,0.4H14l0.1-0.6c0.1-0.8-0.1-1.6-0.7-2.2l-0.1-0.1c-1-1-1.5-2.4-1.3-3.7l0.1-0.4H14l-0.1,0.6C13.8,3.9,14,4.7,14.6,5.4
	L14.6,5.4z M7,7.5c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S8.1,7.5,7,7.5z"
    />
  </svg>
)

const WhirlpoolIcon = styled(Icon)([], space, color)

WhirlpoolIcon.displayName = 'WhirlpoolIcon'

WhirlpoolIcon.defaultProps = {
  size: 24
}

export default WhirlpoolIcon
