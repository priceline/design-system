import React from 'react'
import Svg from './Svg'
export const SvgEventBusy = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M9.3 18l2.4-2.4 2.4 2.4 1.1-1.1-2.4-2.4 2.4-2.4-1-1.1-2.4 2.4L9.3 11l-1.1 1.1 2.4 2.4-2.4 2.4L9.3 18zM19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
  </Svg>
)
SvgEventBusy.isIcon = true
SvgEventBusy.defaultProps = {
  size: 24
}
export default SvgEventBusy
