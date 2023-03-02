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
  'articleBold',
  'paragraph',
  'paragraphBold',
  'paragraph2',
  'paragraph2Bold',
  'caption',
  'captionBold',
  'overline',
  'overlineMedium',
  'disclaimer',
  'disclaimerBold',
  'highlight',
  'highlightBold',
  'subtitle1',
  'subheading1',
  'subheading2',
  'subheading3',
  'subheading4',
  'subheading5',
  'subheading6',
  'label',
]

export function typographyAttrs(props) {
  const { textStyle, theme } = props

  if (!textStyle) {
    return {}
  }

  if (Array.isArray(textStyle)) {
    const styles = textStyle.map((style) => theme.typography[style])

    return styles.reduce(
      (acc, style) => {
        const styleProps = style && style.hasOwnProperty('fontSize') ? Object.keys(style) : []

        if (styleProps.length === 0) {
          // Fill in null values for this index of textStyles if null/undefined provided
          // (exclude caps because we don't handle responsive caps yet)
          ;['fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'textTransform'].forEach((styleProp) => {
            acc[styleProp].push(null)
          })
        } else {
          styleProps.forEach((styleProp) => {
            acc[styleProp].push(style[styleProp])
          })
        }

        return acc
      },
      {
        fontSize: [],
        fontWeight: [],
        lineHeight: [],
        letterSpacing: [],
        caps: [],
        textTransform: [],
      }
    )
  } else {
    return theme.typography[textStyle]
  }
}
