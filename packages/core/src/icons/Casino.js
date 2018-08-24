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
      d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M7.5,18
	C6.7,18,6,17.3,6,16.5S6.7,15,7.5,15S9,15.7,9,16.5S8.3,18,7.5,18z M7.5,9C6.7,9,6,8.3,6,7.5S6.7,6,7.5,6S9,6.7,9,7.5S8.3,9,7.5,9z
	 M12,13.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S12.8,13.5,12,13.5z M16.5,18c-0.8,0-1.5-0.7-1.5-1.5
	s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S17.3,18,16.5,18z M16.5,9C15.7,9,15,8.3,15,7.5S15.7,6,16.5,6S18,6.7,18,7.5S17.3,9,16.5,9z"
    />
  </svg>
)

const CasinoIcon = styled(Icon)([], space, color)

CasinoIcon.displayName = 'CasinoIcon'

CasinoIcon.defaultProps = {
  size: 24
}

export default CasinoIcon
