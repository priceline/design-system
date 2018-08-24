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
      d="M20,6.5h-3v-2c0-1.1-0.9-2-2-2H9c-1.1,0-2,0.9-2,2v2H4c-1.1,0-2,0.9-2,2v11c0,1.1,0.9,2,2,2h16
	c1.1,0,2-0.9,2-2v-11C22,7.4,21.1,6.5,20,6.5z M9,4.5h6v2H9V4.5z M20,19.5H4v-2h16V19.5z M20,14.5H4v-6h3v2h2v-2h6v2h2v-2h3V14.5z"
    />
  </svg>
)

const BagIcon = styled(Icon)([], space, color)

BagIcon.displayName = 'BagIcon'

BagIcon.defaultProps = {
  size: 24
}

export default BagIcon
