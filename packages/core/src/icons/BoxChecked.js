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
      d="M6,3h12c1.7,0,3,1.3,3,3v12c0,1.7-1.3,3-3,3H6c-1.7,0-3-1.3-3-3V6C3,4.3,4.3,3,6,3z M10,17
	l9-8.6L17.6,7L10,14.3l-3.6-3.5L5,12.2L10,17z"
    />
  </svg>
)

const BoxCheckedIcon = styled(Icon)([], space, color)

BoxCheckedIcon.displayName = 'BoxCheckedIcon'

BoxCheckedIcon.defaultProps = {
  size: 24
}

export default BoxCheckedIcon
