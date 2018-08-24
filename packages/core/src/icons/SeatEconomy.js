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
      d="M7.6,5.4c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0c0.8,0.8,0.8,2.1,0,2.8C9.6,6.2,8.4,6.2,7.6,5.4z
	 M6,16V7H4v9c0,2.8,2.2,5,5,5h6v-2H9C7.3,19,6,17.7,6,16z M20,20.1L14.9,15h-3.4v-3.7c1.4,1.2,3.6,2.2,5.5,2.2v-2.2
	c-1.7,0-3.6-0.9-4.7-2l-1.4-1.6c-0.2-0.2-0.4-0.4-0.7-0.5C9.9,7.1,9.6,7,9.3,7l0,0C8,7,7,8,7,9.2V15c0,1.7,1.3,3,3,3h5.1l3.5,3.5
	L20,20.1z"
    />
  </svg>
)

const SeatEconomyIcon = styled(Icon)([], space, color)

SeatEconomyIcon.displayName = 'SeatEconomyIcon'

SeatEconomyIcon.defaultProps = {
  size: 24
}

export default SeatEconomyIcon
