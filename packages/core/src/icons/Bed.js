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
      d="M7.5,12.3c1.5,0,2.7-1.2,2.7-2.7S9,6.8,7.5,6.8S4.7,8,4.7,9.5S5.9,12.3,7.5,12.3z M18.4,6.8
	h-7.3v6.4H3.8V5H2v13.6h1.8v-2.7h16.4v2.7H22v-8.1C22,8.5,20.4,6.8,18.4,6.8z"
    />
  </svg>
)

const BedIcon = styled(Icon)([], space, color)

BedIcon.displayName = 'BedIcon'

BedIcon.defaultProps = {
  size: 24
}

export default BedIcon
