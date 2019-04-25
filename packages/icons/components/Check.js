import React from 'react'
import Svg from './Svg'
export const SvgCheck = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M8.6 15.6l-4.2-4.2L3 12.8l5.6 5.6 12-12L19.2 5 8.6 15.6z" />
  </Svg>
)
SvgCheck.isIcon = true
SvgCheck.defaultProps = {
  size: 24
}
export default SvgCheck
