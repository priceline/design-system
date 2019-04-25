import React from 'react'
import Svg from './Svg'
export const SvgEvent = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M17 13h-5v5h5v-5zM16 2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V2h-2zm3 18H5V9h14v11z" />
  </Svg>
)
SvgEvent.isIcon = true
SvgEvent.defaultProps = {
  size: 24
}
export default SvgEvent
