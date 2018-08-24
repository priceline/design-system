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
      d="M13,7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10
	S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z"
    />
  </svg>
)

const RadioPlusIcon = styled(Icon)([], space, color)

RadioPlusIcon.displayName = 'RadioPlusIcon'

RadioPlusIcon.defaultProps = {
  size: 24
}

export default RadioPlusIcon
