import React from 'react'
import Svg from './Svg'
export const SvgChevronDown = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M7.4 8l4.6 4.6L16.6 8 18 9.4l-6 6-6-6L7.4 8z" />
  </Svg>
)
SvgChevronDown.isIcon = true
SvgChevronDown.defaultProps = {
  size: 24
}
export default SvgChevronDown
