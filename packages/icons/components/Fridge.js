import React from 'react'
import Svg from './Svg'
export const SvgFridge = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M6 21c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v17c0 .6-.4 1-1 1v1h-2v-1H8v1H6v-1zM19 9V8H5v1h14zM7 4v2h2V4H7zm0 7v6h2v-6H7z" />
  </Svg>
)
SvgFridge.isIcon = true
SvgFridge.defaultProps = {
  size: 24
}
export default SvgFridge
