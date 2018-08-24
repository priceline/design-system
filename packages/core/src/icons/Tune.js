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
      d="M3,17v2h6v-2H3z M3,5v2h10V5H3z M13,21v-2h8v-2h-8v-2h-2v6H13z M7,9v2H3v2h4v2h2V9H7z M21,13v-2
	H11v2H21z M15,9h2V7h4V5h-4V3h-2V9z"
    />
  </svg>
)

const TuneIcon = styled(Icon)([], space, color)

TuneIcon.displayName = 'TuneIcon'

TuneIcon.defaultProps = {
  size: 24
}

export default TuneIcon
