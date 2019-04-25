import React from 'react'
import Svg from './Svg'
export const SvgBreakfast = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M19 3H3v10c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM3 19h16v2H3v-2z" />
  </Svg>
)
SvgBreakfast.isIcon = true
SvgBreakfast.defaultProps = {
  size: 24
}
export default SvgBreakfast
