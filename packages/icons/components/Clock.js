import React from 'react'
import Svg from './Svg'
export const SvgClock = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-7.8l4.5 2.7-.8 1.2L11 13V7h1.5v5.2z" />
  </Svg>
)
SvgClock.isIcon = true
SvgClock.defaultProps = {
  size: 24
}
export default SvgClock
