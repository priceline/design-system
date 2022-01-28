export const textStylesValues = [
  'title1',
  'title2',
  'title3',
  'heading1',
  'heading2',
  'heading3',
  'heading4',
  'heading5',
  'heading6',
  'article',
  'paragraph',
  'caption',
  'overline',
  'disclaimer',
  'highlight',
  'subtitle1',
  'subheading1',
  'subheading2',
  'subheading3',
  'subheading4',
  'subheading5',
  'subheading6',
]

const textStylesAllowedPropsAcc = {
  fontSize: [],
  fontWeight: [],
  lineHeight: [],
  letterSpacing: [],
  caps: [],
  textTransform: [],
}

export function typographyAttrs(props) {
  const { textStyle, theme } = props

  if (!textStyle) {
    return {}
  }

  if (Array.isArray(textStyle)) {
    const styles = textStyle.map((style) => theme.typography[style])
    return styles.reduce((acc, style) => {
      const styleProps = style && style.hasOwnProperty('fontSize') ? Object.keys(style) : []

      styleProps.forEach((styleProp) => {
        acc[styleProp].push(style[styleProp])
      })

      return acc
    }, textStylesAllowedPropsAcc)
  } else {
    return theme.typography[textStyle]
  }
}
