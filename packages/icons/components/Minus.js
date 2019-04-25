import React from 'react'
import Svg from './Svg'
export const SvgMinus = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M7 11v2h10v-2H7z" />
  </Svg>
)
SvgMinus.isIcon = true
SvgMinus.defaultProps = {
  size: 24
}
export default SvgMinus
