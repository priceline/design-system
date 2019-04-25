import React from 'react'
import Svg from './Svg'
export const SvgAc = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M22 11h-4.2L21 7.8l-1.4-1.4L15 11h-2V9l4.7-4.7-1.4-1.4L13 6.2V2h-2v4.2L7.8 2.9 6.3 4.3 11 9v2H9L4.3 6.3 2.9 7.8 6.2 11H2v2h4.2L3 16.2l1.4 1.4L9 13h2v2l-4.7 4.7 1.4 1.4 3.3-3.3V22h2v-4.2l3.2 3.2 1.4-1.4L13 15v-2h2l4.7 4.7 1.4-1.4-3.3-3.3H22v-2z" />
  </Svg>
)
SvgAc.isIcon = true
SvgAc.defaultProps = {
  size: 24
}
export default SvgAc
