import React from 'react'
import Svg from './Svg'
export const SvgLocalBar = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.4 7L5.7 5h12.7l-1.8 2H7.4z" />
  </Svg>
)
SvgLocalBar.isIcon = true
SvgLocalBar.defaultProps = {
  size: 24
}
export default SvgLocalBar
