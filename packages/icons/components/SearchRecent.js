import React from 'react'
import Svg from './Svg'
export const SvgSearchRecent = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M17 14h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C17.5 5.9 14.6 3 11 3S4.5 6 4.5 9.5H2l3.8 4 4.2-4H6.5C6.5 7 8.5 5 11 5s4.5 2 4.5 4.5-2 4.5-4.5 4.5c-.7 0-1.3-.1-1.8-.4l-1.5 1.5c1 .6 2.1.9 3.3.9 1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5L22 19l-5-5z" />
  </Svg>
)
SvgSearchRecent.isIcon = true
SvgSearchRecent.defaultProps = {
  size: 24
}
export default SvgSearchRecent
