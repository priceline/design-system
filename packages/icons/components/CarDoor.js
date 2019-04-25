import React from 'react'
import Svg from './Svg'
export const SvgCarDoor = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M18 2h-6.9c-.7 0-1.3.3-1.7.9l-5 7.6c-.3.3-.4.7-.4 1.1V20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 9H6.7l4.7-7H18v7z" />
  </Svg>
)
SvgCarDoor.isIcon = true
SvgCarDoor.defaultProps = {
  size: 24
}
export default SvgCarDoor
