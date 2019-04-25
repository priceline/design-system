import React from 'react'
import Svg from './Svg'
export const SvgChevronRight = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6L8 16.6z" />
  </Svg>
)
SvgChevronRight.isIcon = true
SvgChevronRight.defaultProps = {
  size: 24
}
export default SvgChevronRight
