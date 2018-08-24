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
      d="M15.5,9.6c-0.2-2.8-1.3-5.5-3.4-7.6C9.9,4.1,8.7,6.9,8.5,9.6c1.3,0.7,2.5,1.6,3.5,2.7
	C13,11.2,14.2,10.3,15.5,9.6L15.5,9.6z M9,12.3c-0.1-0.1-0.3-0.2-0.4-0.3C8.7,12.1,8.8,12.2,9,12.3z M15.4,12
	c-0.1,0.1-0.3,0.2-0.4,0.3C15.1,12.2,15.3,12.1,15.4,12z M12,15.4C9.8,12.2,6.2,10,2,10c0,5.3,3.4,9.8,8,11.5c0.6,0.2,1.3,0.4,2,0.5
	c0.7-0.1,1.3-0.3,2-0.5c4.7-1.7,8-6.2,8-11.5C17.8,10,14.1,12.2,12,15.4z M8.6,12c-1.1-0.7-2.3-1.3-3.6-1.6
	C6.3,10.7,7.5,11.3,8.6,12z M19,10.4c-1.3,0.3-2.5,0.9-3.6,1.6C16.5,11.3,17.7,10.7,19,10.4z"
    />
  </svg>
)

const SpaIcon = styled(Icon)([], space, color)

SpaIcon.displayName = 'SpaIcon'

SpaIcon.defaultProps = {
  size: 24
}

export default SpaIcon
