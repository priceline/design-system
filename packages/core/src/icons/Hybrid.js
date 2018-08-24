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
      d="M17,7.5c-9,2-11.1,8.2-13.2,13.3l1.9,0.7l0.9-2.3c0.5,0.2,1,0.3,1.4,0.3c11,0,14-17,14-17c-1,2-8,2.2-13,3.2
	s-7,5.2-7,7.2s1.8,3.8,1.8,3.8C7,7.5,17,7.5,17,7.5z"
    />
  </svg>
)

const HybridIcon = styled(Icon)([], space, color)

HybridIcon.displayName = 'HybridIcon'

HybridIcon.defaultProps = {
  size: 24
}

export default HybridIcon
