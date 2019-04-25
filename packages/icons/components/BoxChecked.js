import React from 'react'
import Svg from './Svg'
export const SvgBoxChecked = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M6 3h12c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3zm4 14l9-8.6L17.6 7 10 14.3l-3.6-3.5L5 12.2l5 4.8z" />
  </Svg>
)
SvgBoxChecked.isIcon = true
SvgBoxChecked.defaultProps = {
  size: 24
}
export default SvgBoxChecked
