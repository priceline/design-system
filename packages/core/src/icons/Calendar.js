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
      d="M9,11H7v2h2V11z M13,11h-2v2h2V11z M17,11h-2v2h2V11z M19,4h-1V2h-2v2H8V2H6v2H5
	C3.9,4,3,4.9,3,6v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20H5V9h14V20z"
    />
  </svg>
)

const CalendarIcon = styled(Icon)([], space, color)

CalendarIcon.displayName = 'CalendarIcon'

CalendarIcon.defaultProps = {
  size: 24
}

export default CalendarIcon
