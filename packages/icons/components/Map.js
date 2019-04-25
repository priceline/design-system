import React from 'react'
import Svg from './Svg'
export const SvgMap = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M20.5 3h-.2L15 5.1 9 3 3.4 4.9c-.2.1-.4.3-.4.5v15.1c0 .3.2.5.5.5h.2L9 18.9l6 2.1 5.6-1.9c.2-.1.4-.2.4-.5V3.5c0-.3-.2-.5-.5-.5zM15 19l-6-2.1V5l6 2.1V19z" />
  </Svg>
)
SvgMap.isIcon = true
SvgMap.defaultProps = {
  size: 24
}
export default SvgMap
