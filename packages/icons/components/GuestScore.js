import React from 'react'
import Svg from './Svg'
export const SvgGuestScore = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentcolor"
    {...props}
  >
    <path d="M20 2H4c-1.105 0-2 .895-2 2v18l4-4h14c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2zm-4.898 12.398L12 12.602 8.898 14.5 9.7 11 7 8.602l3.602-.301L12 5l1.398 3.3L17 8.603 14.3 11z" />
  </Svg>
)
SvgGuestScore.isIcon = true
SvgGuestScore.defaultProps = {
  size: 24
}
export default SvgGuestScore
