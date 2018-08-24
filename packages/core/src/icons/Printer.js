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
      d="M19,8H5c-1.7,0-3,1.3-3,3v6h4v4h12v-4h4v-6C22,9.3,20.7,8,19,8z M16,19H8v-5h8V19z M19,12
	c-0.5,0-1-0.4-1-1s0.5-1,1-1s1,0.4,1,1S19.5,12,19,12z M18,3H6v4h12V3z"
    />
  </svg>
)

const PrinterIcon = styled(Icon)([], space, color)

PrinterIcon.displayName = 'PrinterIcon'

PrinterIcon.defaultProps = {
  size: 24
}

export default PrinterIcon
