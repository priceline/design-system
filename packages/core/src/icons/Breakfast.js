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
      d="M19,3H3v10c0,2.2,1.8,4,4,4h6c2.2,0,4-1.8,4-4v-3h2c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z
	 M19,8h-2V5h2V8z M3,19h16v2H3V19z"
    />
  </svg>
)

const BreakfastIcon = styled(Icon)([], space, color)

BreakfastIcon.displayName = 'BreakfastIcon'

BreakfastIcon.defaultProps = {
  size: 24
}

export default BreakfastIcon
