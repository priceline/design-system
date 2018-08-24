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
      d="M3,17.2V21h3.8l11-11.1L14,6.1L3,17.2z M20.7,7c0.4-0.4,0.4-1,0-1.4l-2.3-2.3
	c-0.4-0.4-1-0.4-1.4,0l-1.8,1.8L19,8.9L20.7,7z"
    />
  </svg>
)

const EditIcon = styled(Icon)([], space, color)

EditIcon.displayName = 'EditIcon'

EditIcon.defaultProps = {
  size: 24
}

export default EditIcon
