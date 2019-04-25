import React from 'react'
import Svg from './Svg'
export const SvgEventAvailable = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M16.5 12.1l-1-1.1-4.9 4.9-2.1-2.1-1.1 1.1 3.2 3.2 5.9-6zM19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
  </Svg>
)
SvgEventAvailable.isIcon = true
SvgEventAvailable.defaultProps = {
  size: 24
}
export default SvgEventAvailable
