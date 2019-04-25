import React from 'react'
import Svg from './Svg'
export const SvgTrendingUp = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M16 6l2.3 2.3-4.9 4.9-4-4L2 16.6 3.4 18l6-6 4 4 6.3-6.3L22 12V6h-6z" />
  </Svg>
)
SvgTrendingUp.isIcon = true
SvgTrendingUp.defaultProps = {
  size: 24
}
export default SvgTrendingUp
