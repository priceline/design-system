import React from 'react'
import Svg from './Svg'
export const SvgDeparture = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M2.5 19h19v2h-19v-2zm19.6-9.9c-.2-.8-1-1.3-1.8-1.1l-5.4 1.5L8 3.1l-1.9.5 4.1 7.2-5 1.3-1.9-1.6-1.5.4 1.8 3.2.8 1.3L6 15l5.3-1.4 4.3-1.2L21 11c.8-.2 1.3-1.1 1.1-1.9z" />
  </Svg>
)
SvgDeparture.isIcon = true
SvgDeparture.defaultProps = {
  size: 24
}
export default SvgDeparture
