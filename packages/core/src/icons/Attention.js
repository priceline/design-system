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
    <path d="M1,21.5h22l-11-19L1,21.5z M13,18.5h-2v-2h2V18.5z M13,14.5h-2v-4h2V14.5z" />
  </svg>
)

const AttentionIcon = styled(Icon)([], space, color)

AttentionIcon.displayName = 'AttentionIcon'

AttentionIcon.defaultProps = {
  size: 24
}

export default AttentionIcon
