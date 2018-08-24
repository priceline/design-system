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
      d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M6,9h12v2H6V9z
	 M14,14H6v-2h8V14z M18,8H6V6h12V8z"
    />
  </svg>
)

const ChatIcon = styled(Icon)([], space, color)

ChatIcon.displayName = 'ChatIcon'

ChatIcon.defaultProps = {
  size: 24
}

export default ChatIcon
