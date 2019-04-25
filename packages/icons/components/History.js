import React from 'react'
import Svg from './Svg'
export const SvgHistory = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M22 12c0 4.7-3.8 8.6-8.6 8.6-2.4 0-4.5-1-6.1-2.5l1.4-1.4c1.2 1.2 2.9 2 4.7 2A6.7 6.7 0 1 0 6.7 12h2.9l-3.8 3.8-.1-.1L2 12h2.9c0-4.7 3.8-8.6 8.6-8.6S22 7.3 22 12zm-9.5-3.8V13l4.1 2.4.7-1.2-3.3-2v-4h-1.5z" />
  </Svg>
)
SvgHistory.isIcon = true
SvgHistory.defaultProps = {
  size: 24
}
export default SvgHistory
