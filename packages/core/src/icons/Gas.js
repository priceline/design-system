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
      d="M19.8,7.2L19.8,7.2l-3.7-3.7L15,4.6l2.1,2.1C16.2,7,15.5,7.9,15.5,9c0,1.4,1.1,2.5,2.5,2.5
	c0.4,0,0.7-0.1,1-0.2v7.2c0,0.5-0.4,1-1,1s-1-0.5-1-1V14c0-1.1-0.9-2-2-2h-1V5c0-1.1-0.9-2-2-2H6C4.9,3,4,3.9,4,5v16h10v-7.5h1.5v5
	c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5V9C20.5,8.3,20.2,7.7,19.8,7.2z M12,10H6V5h6V10z M18,10c-0.6,0-1-0.4-1-1s0.4-1,1-1
	s1,0.4,1,1S18.6,10,18,10z"
    />
  </svg>
)

const GasIcon = styled(Icon)([], space, color)

GasIcon.displayName = 'GasIcon'

GasIcon.defaultProps = {
  size: 24
}

export default GasIcon
