import React from 'react'
import Svg from './Svg'
export const SvgPlus = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z" />
  </Svg>
)
SvgPlus.isIcon = true
SvgPlus.defaultProps = {
  size: 24
}
export default SvgPlus
