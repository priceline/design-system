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
      d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4
	v-6h16V18z M20,8H4V6h16V8z"
    />
  </svg>
)

const CreditCardIcon = styled(Icon)([], space, color)

CreditCardIcon.displayName = 'CreditCardIcon'

CreditCardIcon.defaultProps = {
  size: 24
}

export default CreditCardIcon
