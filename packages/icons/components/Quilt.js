import React from 'react'
import Svg from './Svg'
export const SvgQuilt = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M9.4 19h5.3v-6.5H9.4V19zM3 19h5.3V5H3v14zm12.7 0H21v-6.5h-5.3V19zM9.4 5v6.5H21V5H9.4z" />
  </Svg>
)
SvgQuilt.isIcon = true
SvgQuilt.defaultProps = {
  size: 24
}
export default SvgQuilt
