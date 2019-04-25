import React from 'react'
import Svg from './Svg'
export const SvgBed = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M7.5 12.3c1.5 0 2.7-1.2 2.7-2.7S9 6.8 7.5 6.8 4.7 8 4.7 9.5s1.2 2.8 2.8 2.8zm10.9-5.5h-7.3v6.4H3.8V5H2v13.6h1.8v-2.7h16.4v2.7H22v-8.1c0-2-1.6-3.7-3.6-3.7z" />
  </Svg>
)
SvgBed.isIcon = true
SvgBed.defaultProps = {
  size: 24
}
export default SvgBed
