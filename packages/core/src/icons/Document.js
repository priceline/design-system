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
      d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M16,18H8v-2h8V18z
	 M16,14H8v-2h8V14z M13,9V3.5L18.5,9H13z"
    />
  </svg>
)

const DocumentIcon = styled(Icon)([], space, color)

DocumentIcon.displayName = 'DocumentIcon'

DocumentIcon.defaultProps = {
  size: 24
}

export default DocumentIcon
