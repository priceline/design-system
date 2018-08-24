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
      d="M17.6,8.2l0.6,2L16.5,9l-1.7,1.2l0.6-2l-1.7-1.3h2.1l0.7-2l0.7,2h2.1L17.6,8.2z M19.4,19
	C15.4,23,9,23,5,19C1,15,1,8.6,5,4.6C6.3,3.3,7.9,2.4,9.5,2c-0.9,3.4,0,7.2,2.6,9.8c2.7,2.7,6.4,3.5,9.8,2.6
	C21.6,16.1,20.7,17.7,19.4,19L19.4,19z"
    />
  </svg>
)

const OvernightIcon = styled(Icon)([], space, color)

OvernightIcon.displayName = 'OvernightIcon'

OvernightIcon.defaultProps = {
  size: 24
}

export default OvernightIcon
