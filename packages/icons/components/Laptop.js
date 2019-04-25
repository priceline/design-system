import React from 'react'
import Svg from './Svg'
export const SvgLaptop = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M18.6 17.2c.9 0 1.6-.8 1.6-1.8V6.8c0-1-.7-1.8-1.6-1.8H5.4c-.9 0-1.7.8-1.7 1.8v8.8c0 1 .7 1.8 1.6 1.8H2V19h20v-1.8h-3.4zM5.4 6.8h13.4v8.8H5.4V6.8z" />
  </Svg>
)
SvgLaptop.isIcon = true
SvgLaptop.defaultProps = {
  size: 24
}
export default SvgLaptop
