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
      d="M3,20h3.3v-9.6H3V20z M21,11.2c0-0.9-0.7-1.6-1.6-1.6h-5.2L15,5.9V5.7c0-0.3-0.2-0.6-0.3-0.9
	L13.8,4L8.4,9.3c-0.3,0.2-0.5,0.6-0.5,1.1v8c0,0.9,0.7,1.6,1.6,1.6h7.4c0.7,0,1.2-0.4,1.5-1l2.5-5.7C21,13.2,21,13,21,12.8V11.2
	L21,11.2L21,11.2z"
    />
  </svg>
)

const ThumbsUpIcon = styled(Icon)([], space, color)

ThumbsUpIcon.displayName = 'ThumbsUpIcon'

ThumbsUpIcon.defaultProps = {
  size: 24
}

export default ThumbsUpIcon
