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
      d="M21.5,6.8c0.4,1.6,0.4,4.8,0.4,4.8s0,3.2-0.4,4.8c-0.2,0.9-0.9,1.5-1.8,1.8
	c-1.6,0.4-7.8,0.4-7.8,0.4s-6.2,0-7.8-0.4c-0.9-0.2-1.5-0.9-1.8-1.8C2,14.9,2,11.6,2,11.6s0-3.2,0.4-4.8C2.6,6,3.3,5.3,4.2,5.1
	C5.7,4.7,12,4.7,12,4.7s6.2,0,7.8,0.4C20.6,5.3,21.3,6,21.5,6.8z M10,14.6l5.2-3l-5.2-3V14.6z"
    />
  </svg>
)

const YoutubeIcon = styled(Icon)([], space, color)

YoutubeIcon.displayName = 'YoutubeIcon'

YoutubeIcon.defaultProps = {
  size: 24
}

export default YoutubeIcon
