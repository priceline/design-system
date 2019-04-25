import React from 'react'
import Svg from './Svg'
export const SvgHome = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M10 20.5v-6h4v6h5v-8h3l-10-9-10 9h3v8h5z" />
  </Svg>
)
SvgHome.isIcon = true
SvgHome.defaultProps = {
  size: 24
}
export default SvgHome
