import React from 'react'
import Svg from './Svg'
export const SvgGps = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 8.4c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6S14 8.4 12 8.4zm8.1 2.7c-.5-3.8-3.5-6.8-7.2-7.2V2h-1.8v1.9c-3.8.4-6.8 3.4-7.2 7.2H2v1.8h1.9c.5 3.8 3.5 6.8 7.2 7.2V22h1.8v-1.9c3.8-.5 6.8-3.5 7.2-7.2H22v-1.8h-1.9zM12 18.4c-3.5 0-6.4-2.8-6.4-6.4S8.5 5.6 12 5.6s6.4 2.8 6.4 6.4-2.9 6.4-6.4 6.4z" />
  </Svg>
)
SvgGps.isIcon = true
SvgGps.defaultProps = {
  size: 24
}
export default SvgGps
