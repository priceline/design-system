import React from 'react'
import Svg from './Svg'
export const SvgAttention = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M1 21.5h22l-11-19-11 19zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </Svg>
)
SvgAttention.isIcon = true
SvgAttention.defaultProps = {
  size: 24
}
export default SvgAttention
