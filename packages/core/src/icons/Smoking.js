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
      d="M2,5.5l7,7H2v3h10l7,7l1.3-1.2l-17-17L2,5.5z M20.5,12.5H22v3h-1.5V12.5z M18,12.5h1.5v3H18
	V12.5z M18.9,4.4c0.6-0.6,1-1.5,1-2.4h-1.5c0,1-0.8,1.8-1.9,1.8v1.5c2.2,0,4,1.8,4,4.1v2.1H22V9.4C22,7.2,20.7,5.3,18.9,4.4z
	 M14.5,8.2H16c1.1,0,2,0.7,2,2.1v1.2h1.5V9.9c0-1.8-1.6-3.2-3.5-3.2h-1.5c-1,0-1.9-1-1.9-2s0.8-1.8,1.9-1.8V1.5
	c-1.9,0-3.4,1.5-3.4,3.3S12.6,8.2,14.5,8.2z M17,15.4v-2.9h-2.9L17,15.4z"
    />
  </svg>
)

const SmokingIcon = styled(Icon)([], space, color)

SmokingIcon.displayName = 'SmokingIcon'

SmokingIcon.defaultProps = {
  size: 24
}

export default SmokingIcon
