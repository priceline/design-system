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
      d="M12,2L4,5.6v5.5c0,5,3.4,9.8,8,10.9c4.6-1.1,8-5.9,8-10.9V5.6L12,2z M12,12h6.2
	c-0.5,3.7-2.9,7.1-6.2,8.1V12l-6.2,0V6.8L12,4V12z"
    />
  </svg>
)

const SecurityIcon = styled(Icon)([], space, color)

SecurityIcon.displayName = 'SecurityIcon'

SecurityIcon.defaultProps = {
  size: 24
}

export default SecurityIcon
