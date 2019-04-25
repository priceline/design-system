import React from 'react'
import Svg from './Svg'
export const SvgSmoking = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M2 5.5l7 7H2v3h10l7 7 1.3-1.2-17-17L2 5.5zm18.5 7H22v3h-1.5v-3zm-2.5 0h1.5v3H18v-3zm.9-8.1c.6-.6 1-1.5 1-2.4h-1.5c0 1-.8 1.8-1.9 1.8v1.5c2.2 0 4 1.8 4 4.1v2.1H22V9.4c0-2.2-1.3-4.1-3.1-5zm-4.4 3.8H16c1.1 0 2 .7 2 2.1v1.2h1.5V9.9c0-1.8-1.6-3.2-3.5-3.2h-1.5c-1 0-1.9-1-1.9-2s.8-1.8 1.9-1.8V1.5c-1.9 0-3.4 1.5-3.4 3.3s1.5 3.4 3.4 3.4zm2.5 7.2v-2.9h-2.9l2.9 2.9z" />
  </Svg>
)
SvgSmoking.isIcon = true
SvgSmoking.defaultProps = {
  size: 24
}
export default SvgSmoking
