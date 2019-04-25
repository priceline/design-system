import React from 'react'
import Svg from './Svg'
export const SvgRestaurant = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M11 9H9V2H7v7H5V2H3v7c0 2.1 1.7 3.8 3.8 4v9h2.5v-9c2-.2 3.7-1.9 3.7-4V2h-2v7zm5-3v8h2.5v8H21V2c-2.8 0-5 2.2-5 4z" />
  </Svg>
)
SvgRestaurant.isIcon = true
SvgRestaurant.defaultProps = {
  size: 24
}
export default SvgRestaurant
