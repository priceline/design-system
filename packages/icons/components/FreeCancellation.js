import React from 'react'
import Svg from './Svg'
export const SvgFreeCancellation = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M23 12h-3c0 4.4-3.6 8-8 8-1.6 0-3-.5-4.3-1.2l1.5-1.5c.8.5 1.8.7 2.8.7 3.3 0 6-2.7 6-6h-3l4-4 4 4zM6 12c0-3.3 2.7-6 6-6 1 0 2 .2 2.8.7l1.5-1.5C15 4.5 13.6 4 12 4c-4.4 0-8 3.6-8 8H1l4 4 4-4H6z" />
  </Svg>
)
SvgFreeCancellation.isIcon = true
SvgFreeCancellation.defaultProps = {
  size: 24
}
export default SvgFreeCancellation
