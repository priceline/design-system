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
      d="M12,2L4,5.6v5.5c0,5,3.4,9.8,8,10.9c4.6-1.1,8-5.9,8-10.9V5.6L12,2z M10.2,16.5l-3.6-3.6
	l1.3-1.3l2.3,2.3l5.9-6l1.3,1.3L10.2,16.5z"
    />
  </svg>
)

const VerifiedIcon = styled(Icon)([], space, color)

VerifiedIcon.displayName = 'VerifiedIcon'

VerifiedIcon.defaultProps = {
  size: 24
}

export default VerifiedIcon
