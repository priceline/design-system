import React from 'react'
import Svg from './Svg'
export const SvgMenu = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M3 13h18v-2H3v2zm0 5h18v-2H3v2zM3 6v2h18V6H3z" />
  </Svg>
)
SvgMenu.isIcon = true
SvgMenu.defaultProps = {
  size: 24
}
export default SvgMenu
