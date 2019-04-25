import React from 'react'
import Svg from './Svg'
export const SvgKey = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12.6 10.1C11.8 8 9.8 6.5 7.5 6.5 4.4 6.5 2 8.9 2 12s2.4 5.5 5.5 5.5c2.4 0 4.4-1.5 5.1-3.6h4v3.6h3.6v-3.7H22v-3.7h-9.4zm-5.1 3.7c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z" />
  </Svg>
)
SvgKey.isIcon = true
SvgKey.defaultProps = {
  size: 24
}
export default SvgKey
