import React from 'react'
import Svg from './Svg'
export const SvgArrowDown = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M20 12l-1.4-1.4-5.6 5.6V4h-2v12.2l-5.6-5.6L4 12l8 8 8-8z" />
  </Svg>
)
SvgArrowDown.isIcon = true
SvgArrowDown.defaultProps = {
  size: 24
}
export default SvgArrowDown
