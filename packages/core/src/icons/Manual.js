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
	s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z M7.4,8h2l2.5,4.9L14.4,8h2v8h-1.6v-5.4l-2.3,4.6h-1.1l-2.3-4.6V16H7.4V8z"
    />
  </svg>
)

const ManualIcon = styled(Icon)([], space, color)

ManualIcon.displayName = 'ManualIcon'

ManualIcon.defaultProps = {
  size: 24
}

export default ManualIcon
