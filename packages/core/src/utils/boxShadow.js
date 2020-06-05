/**
 * Replacement for styled-system's boxShadow that maps sizes to the boxShadows values defined
 * in the theme. Returns an object representing the box-shadow CSS rule for use in
 * Styled Components.
 *
 * @param props
 * @returns {{ 'box-shadow': string }}
 */
export default (props) => {
  const boxShadows = {
    sm: {
      'box-shadow': props.theme.boxShadows[0],
    },
    md: {
      'box-shadow': props.theme.boxShadows[1],
    },
    lg: {
      'box-shadow': props.theme.boxShadows[2],
    },
    xl: {
      'box-shadow': props.theme.boxShadows[3],
    },
  }
  return boxShadows[props.boxShadowSize]
}
