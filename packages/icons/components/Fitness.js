import React from 'react'
import Svg from './Svg'
export const SvgFitness = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M20.6 14.9l1.4-1.4-1.4-1.5-3.6 3.6L8.4 7 12 3.4 10.6 2 9.1 3.4 7.7 2 5.6 4.1 4.1 2.7 2.7 4.1l1.4 1.4L2 7.7l1.4 1.4L2 10.6 3.4 12 7 8.4l8.6 8.6-3.6 3.6 1.4 1.4 1.4-1.4 1.4 1.4 2.1-2.1 1.4 1.4 1.4-1.4-1.4-1.4 2.1-2.1-1.2-1.5z" />
  </Svg>
)
SvgFitness.isIcon = true
SvgFitness.defaultProps = {
  size: 24
}
export default SvgFitness
