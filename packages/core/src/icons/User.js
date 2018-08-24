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
      d="M12,12c2.2,0,4-1.8,4-4s-1.8-4-4-4S8,5.8,8,8S9.8,12,12,12z M12,14c-2.7,0-8,1.3-8,4v2h16v-2
	C20,15.3,14.7,14,12,14z"
    />
  </svg>
)

const UserIcon = styled(Icon)([], space, color)

UserIcon.displayName = 'UserIcon'

UserIcon.defaultProps = {
  size: 24
}

export default UserIcon
