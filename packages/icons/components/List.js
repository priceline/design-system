import React from 'react'
import Svg from './Svg'
export const SvgList = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
  </Svg>
)
SvgList.isIcon = true
SvgList.defaultProps = {
  size: 24
}
export default SvgList
