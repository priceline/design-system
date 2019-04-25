import React from 'react'
import Svg from './Svg'
export const SvgSingleOccupancy = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentcolor"
    {...props}
  >
    <path d="M13.066 3.6a1.6 1.6 0 1 1-3.199 0 1.6 1.6 0 0 1 3.2 0zm.134 2.334c1 0 1.866.866 1.933 1.866v4.534l-1.667 1.6v6.8c0 .666-.533 1.266-1.2 1.266H10.8c-.667 0-1.2-.6-1.134-1.266v-6.667-.133L8 12.334V7.8c0-1 .8-1.866 1.8-1.866h3.4z" />
  </Svg>
)
SvgSingleOccupancy.isIcon = true
SvgSingleOccupancy.defaultProps = {
  size: 24
}
export default SvgSingleOccupancy
