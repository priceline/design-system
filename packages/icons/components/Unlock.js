import React from 'react'
import Svg from './Svg'
export const SvgUnlock = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M18 9.5c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h9.1v-2c0-1.7-1.4-3.1-3.1-3.1S8.9 5.8 8.9 7.5H7c0-2.8 2.2-5 5-5s5 2.2 5 5v2h1zm-6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
  </Svg>
)
SvgUnlock.isIcon = true
SvgUnlock.defaultProps = {
  size: 24
}
export default SvgUnlock
