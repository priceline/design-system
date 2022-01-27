// TODO
// supports deprecated `align` prop
// remove in v5

export function textAlignAttrs(props) {
  const { align, textAlign } = props

  return {
    textAlign: textAlign ? textAlign : align,
  }
}
