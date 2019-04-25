import React from 'react'
import Svg from './Svg'
export const SvgDirections = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M21.7 11.3l-9-9c-.4-.4-1-.4-1.4 0l-9 9c-.4.4-.4 1 0 1.4l9 9c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4zM14 14.5V12h-4v3H8v-4c0-.5.5-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
  </Svg>
)
SvgDirections.isIcon = true
SvgDirections.defaultProps = {
  size: 24
}
export default SvgDirections
