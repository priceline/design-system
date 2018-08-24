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
      d="M21,19V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14C20.1,21,21,20.1,21,19z
	 M8.5,13.5l2.5,3l3.5-4.5l4.5,6H5L8.5,13.5z"
    />
  </svg>
)

const PictureIcon = styled(Icon)([], space, color)

PictureIcon.displayName = 'PictureIcon'

PictureIcon.defaultProps = {
  size: 24
}

export default PictureIcon
