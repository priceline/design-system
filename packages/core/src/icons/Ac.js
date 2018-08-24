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
      d="M22,11h-4.2L21,7.8l-1.4-1.4L15,11h-2V9l4.7-4.7l-1.4-1.4L13,6.2V2h-2v4.2L7.8,2.9L6.3,4.3L11,9v2H9L4.3,6.3
	L2.9,7.8L6.2,11H2v2h4.2L3,16.2l1.4,1.4L9,13h2v2l-4.7,4.7l1.4,1.4l3.3-3.3V22h2v-4.2l3.2,3.2l1.4-1.4L13,15v-2h2l4.7,4.7l1.4-1.4
	L17.8,13H22V11z"
    />
  </svg>
)

const AcIcon = styled(Icon)([], space, color)

AcIcon.displayName = 'AcIcon'

AcIcon.defaultProps = {
  size: 24
}

export default AcIcon
