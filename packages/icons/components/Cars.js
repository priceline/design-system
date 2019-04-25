import React from 'react'
import Svg from './Svg'
export const SvgCars = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M18.9 5c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 11v8c0 .6.4 1 1 1h1c.5 0 1-.4 1-1v-1h12v1c0 .6.4 1 1 1h1c.5 0 1-.4 1-1v-8l-2.1-6zM6.5 15c-.8 0-1.5-.7-1.5-1.5S5.7 12 6.5 12s1.5.7 1.5 1.5S7.3 15 6.5 15zm11 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z" />
  </Svg>
)
SvgCars.isIcon = true
SvgCars.defaultProps = {
  size: 24
}
export default SvgCars
