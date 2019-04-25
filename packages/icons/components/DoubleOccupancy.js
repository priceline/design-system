import React from 'react'
import Svg from './Svg'
export const SvgDoubleOccupancy = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentcolor"
    {...props}
  >
    <path d="M9.066 3.6a1.6 1.6 0 1 1-3.199 0 1.6 1.6 0 0 1 3.2 0zM9.2 5.934c1 0 1.866.866 1.933 1.866v4.534l-1.667 1.6v6.8c0 .666-.533 1.266-1.2 1.266H6.8c-.667 0-1.2-.6-1.134-1.266v-6.667-.133L4 12.334V7.8c0-1 .8-1.866 1.8-1.866h3.4zM17.489 3.6a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0zm.2 2.334c1 0 1.8.866 1.866 1.866v4.534l-1.666 1.6v6.8c0 .666-.534 1.266-1.2 1.266h-1.467c-.667 0-1.133-.6-1.133-1.266v-6.667-.133l-1.667-1.6V7.8c0-1 .8-1.866 1.8-1.866h3.467z" />
  </Svg>
)
SvgDoubleOccupancy.isIcon = true
SvgDoubleOccupancy.defaultProps = {
  size: 24
}
export default SvgDoubleOccupancy
