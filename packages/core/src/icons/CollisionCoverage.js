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
      d="M12,1l9,4v6c0,5.5-3.8,10.7-9,12c-5.2-1.3-9-6.5-9-12V5L12,1z M16.2,7.6C16.1,7.3,15.8,7,15.4,7
	H8.6C8.2,7,7.9,7.3,7.8,7.6l-1.3,3.7v5c0,0.3,0.3,0.6,0.6,0.6h0.6c0.3,0,0.6-0.3,0.6-0.6v-0.6h7.3v0.6c0,0.3,0.3,0.6,0.6,0.6h0.6
	c0.3,0,0.6-0.3,0.6-0.6v-5L16.2,7.6z M8.6,13.9c-0.5,0-0.9-0.4-0.9-0.9S8.1,12,8.6,12s0.9,0.4,0.9,0.9S9.1,13.9,8.6,13.9z
	 M15.4,13.9c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9S15.9,13.9,15.4,13.9z M7.7,10.8l0.9-2.8h6.7l0.9,2.8H7.7z"
    />
  </svg>
)

const CollisionCoverageIcon = styled(Icon)([], space, color)

CollisionCoverageIcon.displayName = 'CollisionCoverageIcon'

CollisionCoverageIcon.defaultProps = {
  size: 24
}

export default CollisionCoverageIcon
