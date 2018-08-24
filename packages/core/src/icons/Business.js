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
      d="M10,16v-1H3v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-4h-7v1H10z M20,7h-4V5l-2-2h-4L8,5v2H4
	C2.9,7,2,7.9,2,9v3c0,1.1,0.9,2,2,2h6v-2h4v2h6c1.1,0,2-0.9,2-2V9C22,7.9,21.1,7,20,7z M14,7h-4V5h4V7z"
    />
  </svg>
)

const BusinessIcon = styled(Icon)([], space, color)

BusinessIcon.displayName = 'BusinessIcon'

BusinessIcon.defaultProps = {
  size: 24
}

export default BusinessIcon
