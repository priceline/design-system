import React from 'react'
import Svg from './Svg'
export const SvgSpa = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M15.5 9.6c-.2-2.8-1.3-5.5-3.4-7.6-2.2 2.1-3.4 4.9-3.6 7.6 1.3.7 2.5 1.6 3.5 2.7 1-1.1 2.2-2 3.5-2.7zM9 12.3c-.1-.1-.3-.2-.4-.3.1.1.2.2.4.3zm6.4-.3c-.1.1-.3.2-.4.3.1-.1.3-.2.4-.3zM12 15.4C9.8 12.2 6.2 10 2 10c0 5.3 3.4 9.8 8 11.5.6.2 1.3.4 2 .5.7-.1 1.3-.3 2-.5 4.7-1.7 8-6.2 8-11.5-4.2 0-7.9 2.2-10 5.4zM8.6 12c-1.1-.7-2.3-1.3-3.6-1.6 1.3.3 2.5.9 3.6 1.6zM19 10.4c-1.3.3-2.5.9-3.6 1.6 1.1-.7 2.3-1.3 3.6-1.6z" />
  </Svg>
)
SvgSpa.isIcon = true
SvgSpa.defaultProps = {
  size: 24
}
export default SvgSpa
