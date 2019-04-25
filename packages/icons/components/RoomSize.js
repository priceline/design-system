import React from 'react'
import Svg from './Svg'
export const SvgRoomSize = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 13H9.6v3L6 12l3.6-4v3h4.8V8l3.6 4-3.6 4v-3H12zM3 3h18c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1zm1 2v14h16V5H4z" />
  </Svg>
)
SvgRoomSize.isIcon = true
SvgRoomSize.defaultProps = {
  size: 24
}
export default SvgRoomSize
