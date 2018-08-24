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
      d="M14.5,4H7.1C6.4,4,5.9,4.4,5.6,5l-2.5,5.7C3,10.8,3,11,3,11.2v1.5l0,0v0.1
	c0,0.9,0.7,1.6,1.6,1.6h5.2l-0.7,3.7v0.2c0,0.3,0.2,0.6,0.3,0.9l0.8,0.8l5.4-5.3c0.3-0.3,0.5-0.6,0.5-1.1v-8C16.1,4.7,15.4,4,14.5,4
	z M17.7,4v9.6H21V4H17.7z"
    />
  </svg>
)

const ThumbsDownIcon = styled(Icon)([], space, color)

ThumbsDownIcon.displayName = 'ThumbsDownIcon'

ThumbsDownIcon.defaultProps = {
  size: 24
}

export default ThumbsDownIcon
