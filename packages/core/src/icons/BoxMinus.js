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
      d="M6,5C5.4,5,5,5.4,5,6v12c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V6c0-0.6-0.4-1-1-1H6z M6,3h12
	c1.7,0,3,1.3,3,3v12c0,1.7-1.3,3-3,3H6c-1.7,0-3-1.3-3-3V6C3,4.3,4.3,3,6,3z M7,11v2h10v-2H7z"
    />
  </svg>
)

const BoxMinusIcon = styled(Icon)([], space, color)

BoxMinusIcon.displayName = 'BoxMinusIcon'

BoxMinusIcon.defaultProps = {
  size: 24
}

export default BoxMinusIcon
