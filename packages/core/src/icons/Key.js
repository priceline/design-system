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
      d="M12.6,10.1C11.8,8,9.8,6.5,7.5,6.5C4.4,6.5,2,8.9,2,12s2.4,5.5,5.5,5.5c2.4,0,4.4-1.5,5.1-3.6h4
	v3.6h3.6v-3.7H22v-3.7H12.6z M7.5,13.8c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8S9.3,11,9.3,12S8.5,13.8,7.5,13.8z"
    />
  </svg>
)

const KeyIcon = styled(Icon)([], space, color)

KeyIcon.displayName = 'KeyIcon'

KeyIcon.defaultProps = {
  size: 24
}

export default KeyIcon
