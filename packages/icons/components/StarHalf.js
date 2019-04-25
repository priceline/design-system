import React from 'react'
import Svg from './Svg'
export const SvgStarHalf = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 17.8V2.5L9.2 9.1 2 9.7l5.5 4.8-1.6 7 6.1-3.7z" />
  </Svg>
)
SvgStarHalf.isIcon = true
SvgStarHalf.defaultProps = {
  size: 24
}
export default SvgStarHalf
