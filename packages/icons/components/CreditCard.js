import React from 'react'
import Svg from './Svg'
export const SvgCreditCard = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
  </Svg>
)
SvgCreditCard.isIcon = true
SvgCreditCard.defaultProps = {
  size: 24
}
export default SvgCreditCard
