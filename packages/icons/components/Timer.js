import React from 'react'
import Svg from './Svg'
export const SvgTimer = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M15 1.5H9v2h6v-2zm-4 13h2v-6h-2v6zm8-6.6l1.4-1.4c-.4-.5-.9-1-1.4-1.4l-1.4 1.4c-1.6-1.2-3.5-2-5.6-2-5 0-9 4-9 9s4 9 9 9 9-4 9-9c0-2.1-.7-4.1-2-5.6zm-7 12.6c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z" />
  </Svg>
)
SvgTimer.isIcon = true
SvgTimer.defaultProps = {
  size: 24
}
export default SvgTimer
