import React from 'react'
import Svg from './Svg'
export const SvgWhirlpool = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M11.1 11.5c-.3-.2-.6-.5-.8-.7L8.9 9.2c-.2-.2-.4-.3-.7-.5-.3-.1-.6-.2-1-.2C6 8.5 5 9.5 5 10.8v.8H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.1zm-4.1 8H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm-.4-14.1c-.6-.7-.9-1.5-.7-2.3l.1-.6h-1.9l-.1.4c-.2 1.4.3 2.7 1.3 3.7l.1.1c.6.6.8 1.4.7 2.2l-.1.6h1.9l.1-.4c.2-1.4-.3-2.7-1.4-3.7zm-4 0c1 1 1.5 2.3 1.3 3.7l-.1.4H14l.1-.6c.1-.8-.1-1.6-.7-2.2l-.1-.1c-1-1-1.5-2.4-1.3-3.7l.1-.4H14l-.1.6c-.1.8.1 1.6.7 2.3zM7 7.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </Svg>
)
SvgWhirlpool.isIcon = true
SvgWhirlpool.defaultProps = {
  size: 24
}
export default SvgWhirlpool
