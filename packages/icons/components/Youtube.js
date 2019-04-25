import React from 'react'
import Svg from './Svg'
export const SvgYoutube = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M21.5 6.8c.4 1.6.4 4.8.4 4.8s0 3.2-.4 4.8c-.2.9-.9 1.5-1.8 1.8-1.6.4-7.8.4-7.8.4s-6.2 0-7.8-.4c-.9-.2-1.5-.9-1.8-1.8-.3-1.5-.3-4.8-.3-4.8s0-3.2.4-4.8c.2-.8.9-1.5 1.8-1.7 1.5-.4 7.8-.4 7.8-.4s6.2 0 7.8.4c.8.2 1.5.9 1.7 1.7zM10 14.6l5.2-3-5.2-3v6z" />
  </Svg>
)
SvgYoutube.isIcon = true
SvgYoutube.defaultProps = {
  size: 24
}
export default SvgYoutube
