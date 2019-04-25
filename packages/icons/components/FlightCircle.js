import React from 'react'
import Svg from './Svg'
export const SvgFlightCircle = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm5 12.2v-1.1l-4.2-2.8v-3c0-.5-.4-.8-.8-.8s-.8.4-.8.8v3L7 13.1v1.1l4.2-1.4v3l-1.1.8v.8L12 17l1.8.5v-.8l-1.1-.8v-3l4.3 1.3z" />
  </Svg>
)
SvgFlightCircle.isIcon = true
SvgFlightCircle.defaultProps = {
  size: 24
}
export default SvgFlightCircle
