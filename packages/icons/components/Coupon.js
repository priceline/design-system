import React from 'react'
import Svg from './Svg'
export const SvgCoupon = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M21.4 11.6l-9-9c-.3-.4-.8-.6-1.4-.6H4c-1.1 0-2 .9-2 2v7c0 .6.2 1.1.6 1.4l9 9c.4.4.9.6 1.4.6s1.1-.2 1.4-.6l7-7c.4-.4.6-.9.6-1.4s-.2-1.1-.6-1.4zM5.5 7C4.7 7 4 6.3 4 5.5S4.7 4 5.5 4 7 4.7 7 5.5 6.3 7 5.5 7z" />
  </Svg>
)
SvgCoupon.isIcon = true
SvgCoupon.defaultProps = {
  size: 24
}
export default SvgCoupon
