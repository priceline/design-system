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
      d="M5.4,6.8h15V5h-15C4.5,5,3.7,5.7,3.7,6.8v9.6H2V19h11.6v-2.6H5.4V6.8z M21.2,8.5h-5
	c-0.5,0-0.8,0.4-0.8,0.8v8.8c0,0.5,0.4,0.8,0.8,0.8h5c0.5,0,0.8-0.4,0.8-0.8V9.4C22,8.9,21.6,8.5,21.2,8.5z M20.4,16.4H17v-6.2h3.4
	V16.4z"
    />
  </svg>
)

const DevicesIcon = styled(Icon)([], space, color)

DevicesIcon.displayName = 'DevicesIcon'

DevicesIcon.defaultProps = {
  size: 24
}

export default DevicesIcon
