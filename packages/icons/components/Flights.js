import React from 'react'
import Svg from './Svg'
export const SvgFlights = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M21.5 16v-2l-8-5V3.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5l-2-1.5v-5.5l8 2.5z" />
  </Svg>
)
SvgFlights.isIcon = true
SvgFlights.defaultProps = {
  size: 24
}
export default SvgFlights
