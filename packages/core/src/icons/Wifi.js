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
      d="M2,9.1l1.8,1.8c4.5-4.5,11.8-4.5,16.4,0L22,9.1C16.5,3.6,7.5,3.6,2,9.1z M9.3,16.3L12,19
	l2.7-2.7C13.3,14.8,10.8,14.8,9.3,16.3z M5.6,12.7l1.8,1.8c2.5-2.5,6.5-2.5,9.1,0l1.8-1.8C14.8,9.2,9.2,9.2,5.6,12.7z"
    />
  </svg>
)

const WifiIcon = styled(Icon)([], space, color)

WifiIcon.displayName = 'WifiIcon'

WifiIcon.defaultProps = {
  size: 24
}

export default WifiIcon
