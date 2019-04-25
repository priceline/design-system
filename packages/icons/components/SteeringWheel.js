import React from 'react'
import Svg from './Svg'
export const SvgSteeringWheel = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M11 19.9c0-4.6-.7-6.9-2-6.9H4.1c.4 3.6 3.3 6.5 6.9 6.9zM4.1 11C6.7 9.7 9.4 9 12 9s5.3.7 7.9 2c-.5-4-3.8-7-7.9-7s-7.4 3-7.9 7zm15.8 2H15c-1.3 0-2 2.3-2 6.9 3.6-.4 6.5-3.3 6.9-6.9zM12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z" />
  </Svg>
)
SvgSteeringWheel.isIcon = true
SvgSteeringWheel.defaultProps = {
  size: 24
}
export default SvgSteeringWheel
