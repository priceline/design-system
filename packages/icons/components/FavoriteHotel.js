import React from 'react'
import Svg from './Svg'
export const SvgFavoriteHotel = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 20.9l-1.4-1.3C5.4 14.9 2 11.8 2 8c0-3.1 2.4-5.5 5.5-5.5 1.7 0 3.4.8 4.5 2.1 1.1-1.3 2.8-2.1 4.5-2.1C19.6 2.5 22 4.9 22 8c0 3.8-3.4 6.9-8.6 11.5L12 20.9zM9.7 10.7c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4c-.7 0-1.3.7-1.3 1.4s.6 1.4 1.3 1.4zm5.5-2.8h-3.6v3.3H7.9V7H7v7h.9v-1.4h8.2V14h.9V9.8c0-1-.8-1.9-1.8-1.9z" />
  </Svg>
)
SvgFavoriteHotel.isIcon = true
SvgFavoriteHotel.defaultProps = {
  size: 24
}
export default SvgFavoriteHotel
