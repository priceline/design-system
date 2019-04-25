import React from 'react'
import Svg from './Svg'
export const SvgChevronUp = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M7.4 15.4l4.6-4.6 4.6 4.6L18 14l-6-6-6 6 1.4 1.4z" />
  </Svg>
)
SvgChevronUp.isIcon = true
SvgChevronUp.defaultProps = {
  size: 24
}
export default SvgChevronUp
