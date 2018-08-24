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
      d="M20,6.5h-4v-2c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v2H4c-1.1,0-2,0.9-2,2v11c0,1.1,0.9,2,2,2h16
	c1.1,0,2-0.9,2-2v-11C22,7.4,21.1,6.5,20,6.5z M14,6.5h-4v-2h4V6.5z"
    />
  </svg>
)

const LuggageIcon = styled(Icon)([], space, color)

LuggageIcon.displayName = 'LuggageIcon'

LuggageIcon.defaultProps = {
  size: 24
}

export default LuggageIcon
