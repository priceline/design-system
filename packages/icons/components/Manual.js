import React from 'react'
import Svg from './Svg'
export const SvgManual = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM7.4 8h2l2.5 4.9L14.4 8h2v8h-1.6v-5.4l-2.3 4.6h-1.1l-2.3-4.6V16H7.4V8z" />
  </Svg>
)
SvgManual.isIcon = true
SvgManual.defaultProps = {
  size: 24
}
export default SvgManual
