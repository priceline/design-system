import React from 'react'
import Svg from './Svg'
export const SvgClose = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z" />
  </Svg>
)
SvgClose.isIcon = true
SvgClose.defaultProps = {
  size: 24
}
export default SvgClose
