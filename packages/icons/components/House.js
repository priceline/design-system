import React from 'react'
import Svg from './Svg'
export const SvgHouse = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentcolor"
    {...props}
  >
    <path d="M4.5 3a.83.83 0 0 0-.81.63L2 10.29a.83.83 0 0 0 .81 1v8.33a1.68 1.68 0 0 0 1.69 1.71h15a1.68 1.68 0 0 0 1.67-1.67v-8.33a.83.83 0 0 0 .81-1l-1.67-6.7A.83.83 0 0 0 19.5 3h-15zM12 6.33l5 5h2.5v8.33h-5.83V15.5a1.67 1.67 0 0 0-3.33 0v4.17H4.5v-8.34H7zm-5.83 7.5v2.5h2.5v-2.5h-2.5zm9.17 0v2.5h2.5v-2.5h-2.5z" />
  </Svg>
)
SvgHouse.isIcon = true
SvgHouse.defaultProps = {
  size: 24
}
export default SvgHouse
