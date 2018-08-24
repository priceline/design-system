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
    <path d="M7,2v11h3v9l7-12h-4l4-8H7z" />
  </svg>
)

const ElectricIcon = styled(Icon)([], space, color)

ElectricIcon.displayName = 'ElectricIcon'

ElectricIcon.defaultProps = {
  size: 24
}

export default ElectricIcon
