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
      d="M16.5,12c1.4,0,2.5-1.1,2.5-2.5S17.9,7,16.5,7S14,8.1,14,9.5S15.1,12,16.5,12z M9,11
	c1.7,0,3-1.3,3-3s-1.3-3-3-3S6,6.3,6,8S7.3,11,9,11z M16.5,14c-1.8,0-5.5,0.9-5.5,2.8V19h11v-2.2C22,14.9,18.3,14,16.5,14z M9,13
	c-2.3,0-7,1.2-7,3.5V19h7v-2.2c0-0.9,0.3-2.3,2.4-3.5C10.5,13.1,9.7,13,9,13z"
    />
  </svg>
)

const GuestsIcon = styled(Icon)([], space, color)

GuestsIcon.displayName = 'GuestsIcon'

GuestsIcon.defaultProps = {
  size: 24
}

export default GuestsIcon
