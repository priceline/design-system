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
      d="M2.5,19h19v2h-19V19z M22.1,9.1c-0.2-0.8-1-1.3-1.8-1.1l-5.4,1.5L8,3.1L6.1,3.6l4.1,7.2l-5,1.3
	l-1.9-1.6l-1.5,0.4l1.8,3.2l0.8,1.3L6,15l5.3-1.4l4.3-1.2L21,11C21.8,10.8,22.3,9.9,22.1,9.1z"
    />
  </svg>
)

const DepartureIcon = styled(Icon)([], space, color)

DepartureIcon.displayName = 'DepartureIcon'

DepartureIcon.defaultProps = {
  size: 24
}

export default DepartureIcon
