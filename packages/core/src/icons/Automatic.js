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
      d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8
	s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z M14.3,15.3H16L12.9,8h-1.7L8,15.3h1.7l0.6-1.4h3.4L14.3,15.3z M10.8,12.6L12,9.7l1.2,2.8h-2.4
	V12.6L10.8,12.6z"
    />
  </svg>
)

const AutomaticIcon = styled(Icon)([], space, color)

AutomaticIcon.displayName = 'AutomaticIcon'

AutomaticIcon.defaultProps = {
  size: 24
}

export default AutomaticIcon
