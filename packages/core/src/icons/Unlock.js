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
      d="M18,9.5c1.1,0,2,0.9,2,2v8c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2v-8c0-1.1,0.9-2,2-2h9.1v-2
	c0-1.7-1.4-3.1-3.1-3.1S8.9,5.8,8.9,7.5H7c0-2.8,2.2-5,5-5s5,2.2,5,5v2H18z M12,17.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2
	S10.9,17.5,12,17.5z"
    />
  </svg>
)

const UnlockIcon = styled(Icon)([], space, color)

UnlockIcon.displayName = 'UnlockIcon'

UnlockIcon.defaultProps = {
  size: 24
}

export default UnlockIcon
