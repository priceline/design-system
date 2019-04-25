import React from 'react'
import Svg from './Svg'
export const SvgSecurity = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 2L4 5.6v5.5c0 5 3.4 9.8 8 10.9 4.6-1.1 8-5.9 8-10.9V5.6L12 2zm0 10h6.2c-.5 3.7-2.9 7.1-6.2 8.1V12H5.8V6.8L12 4v8z" />
  </Svg>
)
SvgSecurity.isIcon = true
SvgSecurity.defaultProps = {
  size: 24
}
export default SvgSecurity
