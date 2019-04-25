import React from 'react'
import Svg from './Svg'
export const SvgEdit = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M3 17.2V21h3.8l11-11.1L14 6.1 3 17.2zM20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.4-.4-1-.4-1.4 0l-1.8 1.8L19 8.9 20.7 7z" />
  </Svg>
)
SvgEdit.isIcon = true
SvgEdit.defaultProps = {
  size: 24
}
export default SvgEdit
