import React from 'react'
import Svg from './Svg'
export const SvgShuttle = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M16.5 5.5H3.8c-1 0-1.8.8-1.8 1.9v8.4h1.8c0 1.5 1.2 2.8 2.7 2.8s2.7-1.3 2.7-2.8h5c0 1.5 1.2 2.8 2.7 2.8s2.7-1.3 2.7-2.8H22v-4.6l-5.5-5.7zM3.8 11.1V7.4h3.6v3.7H3.8zm2.7 6c-.7 0-1.4-.6-1.4-1.4 0-.7.6-1.4 1.4-1.4s1.4.7 1.4 1.4c0 .8-.6 1.4-1.4 1.4zm6.4-6H9.3V7.4h3.6v3.7zm4.1 6c-.7 0-1.4-.6-1.4-1.4 0-.7.6-1.4 1.4-1.4s1.4.7 1.4 1.4c0 .8-.7 1.4-1.4 1.4zm-2.3-6V7.4h.9l3.6 3.7h-4.5z" />
  </Svg>
)
SvgShuttle.isIcon = true
SvgShuttle.defaultProps = {
  size: 24
}
export default SvgShuttle
