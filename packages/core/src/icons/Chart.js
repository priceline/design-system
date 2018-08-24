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
      d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,17H7
	v-7h2V17z M13,17h-2V7h2V17z M17,17h-2v-4h2V17z"
    />
  </svg>
)

const ChartIcon = styled(Icon)([], space, color)

ChartIcon.displayName = 'ChartIcon'

ChartIcon.defaultProps = {
  size: 24
}

export default ChartIcon
