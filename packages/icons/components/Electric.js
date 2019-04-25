import React from 'react'
import Svg from './Svg'
export const SvgElectric = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M7 2v11h3v9l7-12h-4l4-8H7z" />
  </Svg>
)
SvgElectric.isIcon = true
SvgElectric.defaultProps = {
  size: 24
}
export default SvgElectric
