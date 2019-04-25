import React from 'react'
import Svg from './Svg'
export const SvgZoomOut = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M15 3l2.3 2.3-2.9 2.9 1.4 1.4 2.9-2.9L21 9V3h-6zM3 9l2.3-2.3 2.9 2.9 1.4-1.4-2.9-2.9L9 3H3v6zm6 12l-2.3-2.3 2.9-2.9-1.4-1.4-2.9 2.9L3 15v6h6zm12-6l-2.3 2.3-2.9-2.9-1.4 1.4 2.9 2.9L15 21h6v-6z" />
  </Svg>
)
SvgZoomOut.isIcon = true
SvgZoomOut.defaultProps = {
  size: 24
}
export default SvgZoomOut
