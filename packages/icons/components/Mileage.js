import React from 'react'
import Svg from './Svg'
export const SvgMileage = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 16c-1.7 0-3-1.3-3-3 0-1.1.6-2.1 1.5-2.6l9.7-5.6-5.5 9.6c-.5.9-1.5 1.6-2.7 1.6zm0-13c1.8 0 3.5.5 5 1.3l-2.1 1.2C14 5.2 13 5 12 5c-4.4 0-8 3.6-8 8 0 2.2.9 4.2 2.3 5.6.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0C3.1 18.3 2 15.8 2 13 2 7.5 6.5 3 12 3zm10 10c0 2.8-1.1 5.3-2.9 7.1-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4 1.5-1.4 2.3-3.4 2.3-5.6 0-1-.2-2-.5-2.9L20.7 8c.8 1.5 1.3 3.2 1.3 5z" />
  </Svg>
)
SvgMileage.isIcon = true
SvgMileage.defaultProps = {
  size: 24
}
export default SvgMileage
