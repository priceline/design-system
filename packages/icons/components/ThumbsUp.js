import React from 'react'
import Svg from './Svg'
export const SvgThumbsUp = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M3 20h3.3v-9.6H3V20zm18-8.8c0-.9-.7-1.6-1.6-1.6h-5.2l.8-3.7v-.2c0-.3-.2-.6-.3-.9l-.9-.8-5.4 5.3c-.3.2-.5.6-.5 1.1v8c0 .9.7 1.6 1.6 1.6h7.4c.7 0 1.2-.4 1.5-1l2.5-5.7c.1-.1.1-.3.1-.5v-1.6z" />
  </Svg>
)
SvgThumbsUp.isIcon = true
SvgThumbsUp.defaultProps = {
  size: 24
}
export default SvgThumbsUp
