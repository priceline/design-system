import React from 'react'
import Svg from './Svg'
export const SvgBoxMinus = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M6 5c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H6zm0-2h12c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3zm1 8v2h10v-2H7z" />
  </Svg>
)
SvgBoxMinus.isIcon = true
SvgBoxMinus.defaultProps = {
  size: 24
}
export default SvgBoxMinus
