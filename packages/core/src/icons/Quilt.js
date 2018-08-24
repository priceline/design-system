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
    <path d="M9.4,19h5.3v-6.5H9.4V19z M3,19h5.3V5H3V19z M15.7,19H21v-6.5h-5.3V19z M9.4,5v6.5H21V5H9.4z" />
  </svg>
)

const QuiltIcon = styled(Icon)([], space, color)

QuiltIcon.displayName = 'QuiltIcon'

QuiltIcon.defaultProps = {
  size: 24
}

export default QuiltIcon
