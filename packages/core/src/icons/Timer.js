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
      d="M15,1.5H9v2h6V1.5z M11,14.5h2v-6h-2V14.5z M19,7.9l1.4-1.4C20,6,19.5,5.5,19,5.1l-1.4,1.4
	c-1.6-1.2-3.5-2-5.6-2c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C21,11.4,20.3,9.4,19,7.9z M12,20.5c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7
	S15.9,20.5,12,20.5z"
    />
  </svg>
)

const TimerIcon = styled(Icon)([], space, color)

TimerIcon.displayName = 'TimerIcon'

TimerIcon.defaultProps = {
  size: 24
}

export default TimerIcon
