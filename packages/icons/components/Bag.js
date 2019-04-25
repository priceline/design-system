import React from 'react'
import Svg from './Svg'
export const SvgBag = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M20 6.5h-3v-2c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2zm-11-2h6v2H9v-2zm11 15H4v-2h16v2zm0-5H4v-6h3v2h2v-2h6v2h2v-2h3v6z" />
  </Svg>
)
SvgBag.isIcon = true
SvgBag.defaultProps = {
  size: 24
}
export default SvgBag
