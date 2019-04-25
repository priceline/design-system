import React from 'react'
import Svg from './Svg'
export const SvgDollar = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 10.9c-2.3-.6-3-1.2-3-2.1C9 7.7 10 7 11.7 7c1.8 0 2.4.8 2.5 2.1h2.2c-.1-1.7-1.1-3.3-3.2-3.8V3h-3v2.2c-1.9.4-3.5 1.6-3.5 3.6 0 2.3 1.9 3.5 4.7 4.1 2.5.6 3 1.5 3 2.4 0 .7-.5 1.8-2.7 1.8-2.1 0-2.9-.9-3-2.1H6.5c.1 2.2 1.8 3.4 3.7 3.8V21h3v-2.1c1.9-.4 3.5-1.5 3.5-3.6 0-2.8-2.4-3.8-4.7-4.4z" />
  </Svg>
)
SvgDollar.isIcon = true
SvgDollar.defaultProps = {
  size: 24
}
export default SvgDollar
