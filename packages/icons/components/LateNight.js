import React from 'react'
import Svg from './Svg'
export const SvgLateNight = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm.8 5c-2.9 0-5.3 2.2-5.3 5s2.4 5 5.3 5c1 0 1.9-.2 2.7-.7-1.6-.9-2.7-2.5-2.7-4.3s1.1-3.5 2.7-4.3c-.8-.5-1.7-.7-2.7-.7z" />
  </Svg>
)
SvgLateNight.isIcon = true
SvgLateNight.defaultProps = {
  size: 24
}
export default SvgLateNight
