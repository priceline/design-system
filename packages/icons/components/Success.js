import React from 'react'
import Svg from './Svg'
export const SvgSuccess = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.7 14.5L6 12.2 7.2 11l3.1 3.1 6.5-6.5L18 8.8l-7.7 7.7z" />
  </Svg>
)
SvgSuccess.isIcon = true
SvgSuccess.defaultProps = {
  size: 24
}
export default SvgSuccess
