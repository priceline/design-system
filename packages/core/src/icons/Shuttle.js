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
      d="M16.5,5.5H3.8C2.8,5.5,2,6.3,2,7.4v8.4h1.8c0,1.5,1.2,2.8,2.7,2.8s2.7-1.3,2.7-2.8h5
	c0,1.5,1.2,2.8,2.7,2.8s2.7-1.3,2.7-2.8H22v-4.6L16.5,5.5z M3.8,11.1V7.4h3.6v3.7H3.8z M6.5,17.1c-0.7,0-1.4-0.6-1.4-1.4
	c0-0.7,0.6-1.4,1.4-1.4s1.4,0.7,1.4,1.4C7.9,16.5,7.3,17.1,6.5,17.1z M12.9,11.1H9.3V7.4h3.6V11.1z M17,17.1c-0.7,0-1.4-0.6-1.4-1.4
	c0-0.7,0.6-1.4,1.4-1.4s1.4,0.7,1.4,1.4C18.4,16.5,17.7,17.1,17,17.1z M14.7,11.1V7.4h0.9l3.6,3.7H14.7z"
    />
  </svg>
)

const ShuttleIcon = styled(Icon)([], space, color)

ShuttleIcon.displayName = 'ShuttleIcon'

ShuttleIcon.defaultProps = {
  size: 24
}

export default ShuttleIcon
