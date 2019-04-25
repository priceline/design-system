import React from 'react'
import Svg from './Svg'
export const SvgSwap = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M16 17v-7h-2v7h-3l4 4 4-4h-3zM9 3L5 7h3v7h2V7h3L9 3z" />
  </Svg>
)
SvgSwap.isIcon = true
SvgSwap.defaultProps = {
  size: 24
}
export default SvgSwap
