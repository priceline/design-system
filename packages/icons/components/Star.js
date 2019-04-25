import React from 'react'
import Svg from './Svg'
export const SvgStar = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 17.8l6.2 3.7-1.6-7L22 9.7l-7.2-.6L12 2.5 9.2 9.1 2 9.7l5.5 4.8-1.6 7 6.1-3.7z" />
  </Svg>
)
SvgStar.isIcon = true
SvgStar.defaultProps = {
  size: 24
}
export default SvgStar
