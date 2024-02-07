/**
 * @deprecated align prop is not supported since v5
 * @public
 */
export function textAlignAttrs(props) {
  const { align, textAlign } = props

  return {
    textAlign: textAlign ? textAlign : align,
  }
}
