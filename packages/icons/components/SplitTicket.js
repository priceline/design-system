import React from 'react'
import Svg from './Svg'
export const SvgSplitTicket = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M20 12c0 1.1.9 2 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4c1.1 0 2-.9 2-2s-.9-2-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v4c-1.1 0-2 .9-2 2zm-3 2.2v-1.1l-4.2-2.8v-3c0-.5-.4-.8-.8-.8s-.8.4-.8.8v3L7 13.1v1.1l4.2-1.4v3l-1.1.8v.8L12 17l1.8.5v-.8l-1.1-.8v-3l4.3 1.3z" />
  </Svg>
)
SvgSplitTicket.isIcon = true
SvgSplitTicket.defaultProps = {
  size: 24
}
export default SvgSplitTicket
