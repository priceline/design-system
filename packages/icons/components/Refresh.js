import React from 'react'
import Svg from './Svg'
export const SvgRefresh = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M17.6 6.3C16.2 4.9 14.2 4 12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8c3.7 0 6.8-2.6 7.7-6h-2.1c-.8 2.3-3 4-5.6 4-3.3 0-6-2.7-6-6s2.7-6 6-6c1.7 0 3.1.7 4.2 1.8L13 11h7V4l-2.4 2.3z" />
  </Svg>
)
SvgRefresh.isIcon = true
SvgRefresh.defaultProps = {
  size: 24
}
export default SvgRefresh
