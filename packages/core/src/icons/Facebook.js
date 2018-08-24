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
      d="M20.9,22H3.1C2.5,22,2,21.5,2,20.9V3.1C2,2.5,2.5,2,3.1,2h17.8C21.5,2,22,2.5,22,3.1v17.8
	C22,21.5,21.5,22,20.9,22z M15.8,22v-7.7h2.6l0.4-3h-3V9.3c0-0.9,0.2-1.5,1.5-1.5l1.6,0V5.1c-0.3,0-1.2-0.1-2.3-0.1
	c-2.3,0-3.9,1.4-3.9,4v2.2h-2.6v3h2.6V22H15.8z"
    />
  </svg>
)

const FacebookIcon = styled(Icon)([], space, color)

FacebookIcon.displayName = 'FacebookIcon'

FacebookIcon.defaultProps = {
  size: 24
}

export default FacebookIcon
