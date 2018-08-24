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
      d="M21.7,18.3L13.5,10c0.8-2.1,0.4-4.6-1.4-6.3c-1.8-1.8-4.5-2.2-6.7-1.2l3.9,3.9L6.6,9.2l-4-3.9
	C1.5,7.5,1.9,10.2,3.8,12c1.7,1.7,4.2,2.2,6.3,1.4l8.3,8.3c0.4,0.4,0.9,0.4,1.3,0l2.1-2.1C22.1,19.3,22.1,18.6,21.7,18.3z"
    />
  </svg>
)

const BuildIcon = styled(Icon)([], space, color)

BuildIcon.displayName = 'BuildIcon'

BuildIcon.defaultProps = {
  size: 24
}

export default BuildIcon
