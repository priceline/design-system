import React from 'react'
import Svg from './Svg'
export const SvgVerified = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 2L4 5.6v5.5c0 5 3.4 9.8 8 10.9 4.6-1.1 8-5.9 8-10.9V5.6L12 2zm-1.8 14.5l-3.6-3.6 1.3-1.3 2.3 2.3 5.9-6 1.3 1.3-7.2 7.3z" />
  </Svg>
)
SvgVerified.isIcon = true
SvgVerified.defaultProps = {
  size: 24
}
export default SvgVerified
