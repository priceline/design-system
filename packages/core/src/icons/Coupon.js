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
      d="M21.4,11.6l-9-9C12.1,2.2,11.6,2,11,2H4C2.9,2,2,2.9,2,4v7c0,0.6,0.2,1.1,0.6,1.4l9,9
	C12,21.8,12.5,22,13,22s1.1-0.2,1.4-0.6l7-7C21.8,14,22,13.5,22,13S21.8,11.9,21.4,11.6z M5.5,7C4.7,7,4,6.3,4,5.5S4.7,4,5.5,4
	S7,4.7,7,5.5S6.3,7,5.5,7z"
    />
  </svg>
)

const CouponIcon = styled(Icon)([], space, color)

CouponIcon.displayName = 'CouponIcon'

CouponIcon.defaultProps = {
  size: 24
}

export default CouponIcon
