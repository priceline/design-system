import React from 'react'
import Svg from './Svg'
export const SvgParking = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12.5 3h-7v18h4v-6h3c3.3 0 6-2.7 6-6s-2.7-6-6-6zm.2 8H9.5V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z" />
  </Svg>
)
SvgParking.isIcon = true
SvgParking.defaultProps = {
  size: 24
}
export default SvgParking
