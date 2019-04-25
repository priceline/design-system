import React from 'react'
import Svg from './Svg'
export const SvgGolf = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M19.5 18c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zM17 5.9L9 2v18H7v-1.7c-1.8.4-3 1-3 1.7 0 1.1 2.7 2 6 2s6-.9 6-2c0-1-2.2-1.8-5-2V9l6-3.1z" />
  </Svg>
)
SvgGolf.isIcon = true
SvgGolf.defaultProps = {
  size: 24
}
export default SvgGolf
