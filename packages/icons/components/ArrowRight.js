import React from 'react'
import Svg from './Svg'
export const SvgArrowRight = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 4l-1.4 1.4 5.6 5.6H4v2h12.2l-5.6 5.6L12 20l8-8-8-8z" />
  </Svg>
)
SvgArrowRight.isIcon = true
SvgArrowRight.defaultProps = {
  size: 24
}
export default SvgArrowRight
