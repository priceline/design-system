import React from 'react'
import Svg from './Svg'
export const SvgOvernight = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M17.6 8.2l.6 2L16.5 9l-1.7 1.2.6-2-1.7-1.3h2.1l.7-2 .7 2h2.1l-1.7 1.3zM19.4 19C15.4 23 9 23 5 19S1 8.6 5 4.6C6.3 3.3 7.9 2.4 9.5 2c-.9 3.4 0 7.2 2.6 9.8 2.7 2.7 6.4 3.5 9.8 2.6-.3 1.7-1.2 3.3-2.5 4.6z" />
  </Svg>
)
SvgOvernight.isIcon = true
SvgOvernight.defaultProps = {
  size: 24
}
export default SvgOvernight
