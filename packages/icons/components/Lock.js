import React from 'react'
import Svg from './Svg'
export const SvgLock = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M18 9.5h-1v-2c0-2.8-2.2-5-5-5s-5 2.2-5 5v2H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-6 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-8H8.9v-2c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1v2z" />
  </Svg>
)
SvgLock.isIcon = true
SvgLock.defaultProps = {
  size: 24
}
export default SvgLock
