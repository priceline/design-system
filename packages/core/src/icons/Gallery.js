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
      d="M22,16V4c0-1.1-0.9-2-2-2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12C21.1,18,22,17.1,22,16z
	 M11,12l2,2.7l3-3.7l4,5H8L11,12z M2,6v14c0,1.1,0.9,2,2,2h14v-2H4V6H2z"
    />
  </svg>
)

const GalleryIcon = styled(Icon)([], space, color)

GalleryIcon.displayName = 'GalleryIcon'

GalleryIcon.defaultProps = {
  size: 24
}

export default GalleryIcon
