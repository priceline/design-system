import React from 'react'
import Svg from './Svg'
export const SvgSeat = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M4 18v3h3v-3h10v3h3v-6H4v3zm15-8h3v3h-3v-3zM2 10h3v3H2v-3zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z" />
  </Svg>
)
SvgSeat.isIcon = true
SvgSeat.defaultProps = {
  size: 24
}
export default SvgSeat
