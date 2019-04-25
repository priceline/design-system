import React from 'react'
import Svg from './Svg'
export const SvgArrowUp = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M4 12l1.4 1.4L11 7.8V20h2V7.8l5.6 5.6L20 12l-8-8-8 8z" />
  </Svg>
)
SvgArrowUp.isIcon = true
SvgArrowUp.defaultProps = {
  size: 24
}
export default SvgArrowUp
