import React from 'react'
import Svg from './Svg'
export const SvgChevronLeft = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M15.4 16.6L10.8 12l4.6-4.6L14 6l-6 6 6 6 1.4-1.4z" />
  </Svg>
)
SvgChevronLeft.isIcon = true
SvgChevronLeft.defaultProps = {
  size: 24
}
export default SvgChevronLeft
