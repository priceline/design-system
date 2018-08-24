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
      d="M13.2,14.6l1.4-1.4l6.4,6.4L19.7,21L13.2,14.6z M17.5,8.8L20.4,6C16.4,2,10,2,6.1,5.9
	C10,4.6,14.4,5.7,17.5,8.8L17.5,8.8z M6,6C2.1,9.9,2.1,16.3,6.1,20.3L9,17.4C5.8,14.3,4.7,9.9,6,6z M6.1,6L6.1,6
	c-0.4,3,1.1,6.8,4.3,10l5.7-5.7C13,7.1,9.1,5.6,6.1,6z"
    />
  </svg>
)

const BeachIcon = styled(Icon)([], space, color)

BeachIcon.displayName = 'BeachIcon'

BeachIcon.defaultProps = {
  size: 24
}

export default BeachIcon
