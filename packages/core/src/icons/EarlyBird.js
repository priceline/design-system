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
      d="M19.1,14.9L22,12l-2.9-2.9V4.9h-4.1L12,2L9.1,4.9H4.9v4.1L2,12l2.9,2.9v4.1h4.1L12,22l2.9-2.9
	h4.1V14.9z M12,17.3c-2.9,0-5.3-2.4-5.3-5.3S9.1,6.7,12,6.7s5.3,2.4,5.3,5.3S14.9,17.3,12,17.3z"
    />
  </svg>
)

const EarlyBirdIcon = styled(Icon)([], space, color)

EarlyBirdIcon.displayName = 'EarlyBirdIcon'

EarlyBirdIcon.defaultProps = {
  size: 24
}

export default EarlyBirdIcon
