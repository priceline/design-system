/**
 * Replacement for styled-system's boxShadow that maps sizes to the boxShadows values defined
 * in the theme. Returns an object representing the box-shadow CSS rule for use in
 * Styled Components.
 *
 * @param props
 * @returns {{ 'box-shadow': string }}
 */

import { boxShadows as defaultBoxShadowTheme } from '../theme'

export default (props) => {
  const boxShadowTheme = props.theme.boxShadows || defaultBoxShadowTheme
  const boxShadows = {
    sm: {
      'box-shadow': boxShadowTheme[0],
    },
    md: {
      'box-shadow': boxShadowTheme[1],
    },
    lg: {
      'box-shadow': boxShadowTheme[2],
    },
    xl: {
      'box-shadow': boxShadowTheme[3],
    },
  }
  return boxShadows[props.boxShadowSize]
}
