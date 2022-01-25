import { getPaletteColor, hexToRgb } from '..'

export const boxShadowSizeValues = ['sm', 'md', 'lg', 'xl', '2xl', 'overlay-lg', 'overlay-xl']

function calculateShadowProps(effectiveShadow, effectiveColor) {
  if (effectiveColor) {
    const rgb = hexToRgb(effectiveColor)

    return effectiveShadow.replace('rgba(0,0,0,', `${rgb.slice(0, rgb.length - 1)}, `)
  }

  return effectiveShadow
}

export function boxShadowAttrs(props) {
  const { boxShadowSize, boxShadowColor, theme } = props

  if (!boxShadowSize) {
    return {}
  }

  let effectiveColor

  if (boxShadowColor) {
    const baseColor = boxShadowColor.split('.')[0]
    const shadowColor = `${baseColor}.dark`

    effectiveColor = getPaletteColor(shadowColor)(props)
  }

  if (Array.isArray(boxShadowSize)) {
    const effectiveShadow = boxShadowSize.map((size) => theme.shadows[size])
    const shadows = effectiveShadow.map((shadow) => calculateShadowProps(shadow, effectiveColor))
    return {
      boxShadow: shadows,
    }
  } else {
    const effectiveShadow = theme.shadows[boxShadowSize]

    return {
      boxShadow: calculateShadowProps(effectiveShadow, effectiveColor),
    }
  }
}
