import React from 'react'
import Svg from './Svg'
export const SvgArrowLeft = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z" />
  </Svg>
)
SvgArrowLeft.isIcon = true
SvgArrowLeft.defaultProps = {
  size: 24
}
export default SvgArrowLeft
