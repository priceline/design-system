import React from 'react'
import Svg from './Svg'
export const SvgThumbsDown = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M14.5 4H7.1c-.7 0-1.2.4-1.5 1l-2.5 5.7c-.1.1-.1.3-.1.5v1.6c0 .9.7 1.6 1.6 1.6h5.2l-.7 3.7v.2c0 .3.2.6.3.9l.8.8 5.4-5.3c.3-.3.5-.6.5-1.1v-8c0-.9-.7-1.6-1.6-1.6zm3.2 0v9.6H21V4h-3.3z" />
  </Svg>
)
SvgThumbsDown.isIcon = true
SvgThumbsDown.defaultProps = {
  size: 24
}
export default SvgThumbsDown
