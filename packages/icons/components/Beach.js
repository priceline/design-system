import React from 'react'
import Svg from './Svg'
export const SvgBeach = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M13.2 14.6l1.4-1.4 6.4 6.4-1.3 1.4-6.5-6.4zm4.3-5.8L20.4 6c-4-4-10.4-4-14.3-.1 3.9-1.3 8.3-.2 11.4 2.9zM6 6c-3.9 3.9-3.9 10.3.1 14.3L9 17.4C5.8 14.3 4.7 9.9 6 6zm.1 0c-.4 3 1.1 6.8 4.3 10l5.7-5.7C13 7.1 9.1 5.6 6.1 6z" />
  </Svg>
)
SvgBeach.isIcon = true
SvgBeach.defaultProps = {
  size: 24
}
export default SvgBeach
