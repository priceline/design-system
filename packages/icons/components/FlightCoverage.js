import React from 'react'
import Svg from './Svg'
export const SvgFlightCoverage = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 1l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4zm5 12.7v-1.1l-4.2-2.8v-3c0-.4-.4-.8-.8-.8s-.8.4-.8.8v3L7 12.6v1.1l4.2-1.4v3l-1.1.8v.9l1.8-.5 1.8.5v-.8l-1.1-.8v-3l4.4 1.3z" />
  </Svg>
)
SvgFlightCoverage.isIcon = true
SvgFlightCoverage.defaultProps = {
  size: 24
}
export default SvgFlightCoverage
