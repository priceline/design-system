import { css } from 'styled-components'
import { fade, red, spin } from '../Animations'

export const getAnimation = (animation = '') => {
  switch (animation) {
    case 'fade':
      return fade
    case 'red':
      return red
    case 'spin':
      return spin
    default:
      return css``
  }
}
