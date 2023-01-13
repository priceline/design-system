import themeGet from '@styled-system/theme-get'
import { css } from 'styled-components'
import { mediaQueries } from '../theme'

// Use this to mark props as deprecated
export const deprecatedPropType = (replacement) => (props, propName) => {
  if (props[propName]) {
    return new Error(
      `The \`${propName}\` prop is deprecated and will be removed in a future release. Please use \`${replacement}\` instead.`
    )
  }
}

/**
 * Checks if the given color prop is a valid palette color
 */
export const hasPaletteColor = (props) => {
  return (
    props.theme &&
    props.theme.palette &&
    typeof props.color === 'string' &&
    Object.keys(props.theme.palette).includes(props.color.split('.')[0])
  )
}

export const hasPaletteColorShade = (props, color = undefined) => {
  const validColor = (typeof color === 'string' && color) || (typeof props.color === 'string' && props.color)
  const [col, shade] = validColor.split('.')

  return (
    props.theme &&
    props.theme.palette &&
    Object.keys(props.theme.palette).includes(col) &&
    Object.keys(props.theme.palette[col]).includes(shade)
  )
}

export const deprecatedColorValue = () => (props, propName, componentName) => {
  if (
    process.env.NODE_ENV !== 'production' &&
    props.theme &&
    props[propName] &&
    !hasPaletteColor({ color: props[propName], ...props })
  ) {
    return new Error(
      `The color value of \`${props[propName]}\` for \`${componentName}\` is deprecated and will be removed in a future release. Please use a palette color instead.`
    )
  }
}

/**
 * Converts a hex color to rgb
 *
 * @example hexToRgb('#0068EF') =\> 'rgb(0, 104, 239)'
 *
 * @param color - The color to transform to rgb
 *
 * @returns The color in rgb
 */
export const hexToRgb = (color) => {
  color = color.substring(1)

  /* eslint-disable @rushstack/security/no-unsafe-regexp */
  let colors = color.match(new RegExp(`.{1,${color.length / 3}}`, 'g'))

  if (colors) {
    colors = colors.map((val) => parseInt(val.length === 1 ? val + val : val, 16)).join(', ')
  }

  return colors ? `rgb(${colors})` : ''
}

/**
 * Decomposes a color into an array of values
 *
 * @example decomposeColor('#0068EF') =\> [0, 122, 255]
 *
 * @param color - The color to decompose
 *
 * @returns An array of the color values
 */
export const decomposeColor = (color) => {
  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color))
  }

  return color
    .substring(color.indexOf('(') + 1, color.length - 1)
    .split(',')
    .map((value) => parseFloat(value))
}

/**
 * Gets the luminance of a color
 *
 * @example getLuminance('#0068EF') =\> 0.211
 * @see https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param color - The color to get the luminance of
 *
 * @returns The luminance of the color
 */
export const getLuminance = (color) => {
  const [r, g, b] = decomposeColor(color).map((val) => {
    val = val / 255
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4
  })

  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/**
 * Gets the contrast ratio between two colors
 *
 * @example getContrastRatio('#0068EF', '#fff') =\> 4.016975780478911
 * @see https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 */
export const getContrastRatio = (colorA, colorB) => {
  const luminA = getLuminance(colorA)
  const luminB = getLuminance(colorB)
  return (Math.max(luminA, luminB) + 0.05) / (Math.min(luminA, luminB) + 0.05)
}

/**
 *
 * @param array - An array of sizes, ex: ['small', null, null, null, null, 'medium']
 * @param length - A number: this will be used to slice the above array
 *
 * @returns This function's purpose is to determine which item in the provided array to return at each breakpoint
 * 1) takes in an array, splits the array at the given length and creates a new smaller array
 * 2) that new smaller array is then passed into a reduceRight function to determine which value to be returned
 *  reduceRight is used so that the reduce function reads from right to left
 */
export const getBreakpointSize = (array, length) => {
  const filteredArray = array.slice(0, length)
  return filteredArray.reduceRight((carry, item) => {
    return !carry ? item : carry
  }, null)
}

/**
 * Applies the selected size styles to a styled component.
 * if size is a string, it will pass that string into the sizes object to return the correct css
 * if size is an array, it will determine the current screen size and then utilize the getBreakpointSize
 * helper to determine the css to return from the sizes object
 *
 * @param sizes - An object of size styles
 *
 */
export const applySizes = (sizes = null, defaultSize = 'medium', mediaQueriesOptions = mediaQueries) => ({
  size,
}) => {
  if (sizes && typeof size === 'string') {
    // prettier-ignore
    return css`${sizes[size] || sizes[defaultSize] || ''}`
  }
  if (sizes && Array.isArray(size)) {
    // prettier-ignore
    return css`${sizes[getBreakpointSize(size, 1)]};
        ${mediaQueriesOptions.sm} {
          ${sizes[getBreakpointSize(size, 2)]};
        }
        ${mediaQueriesOptions.md} {
          ${sizes[getBreakpointSize(size, 3)]};
        }
        ${mediaQueriesOptions.lg} {
          ${sizes[getBreakpointSize(size, 4)]};
        }
        ${mediaQueriesOptions.xl} {
          ${sizes[getBreakpointSize(size, 5)]};
        }
        ${mediaQueriesOptions.xxl} {
          ${sizes[getBreakpointSize(size, 6)]};
        }`
  }
}

const colorShadeRegex = /^([a-z]+)\.([a-z]+)$/i

/**
 * Applies the selected variation style to a styled component.
 * Combines the variation style with any custom styling from
 * theme.componentStyles[component][variation]
 *
 * Once updated to styled-components v4, componentName is no
 * longer needed as it is part of forwardedClass.displayName
 *
 * @param componentName - The name of the component
 * @param variations - An object of variation styles
 */
export const applyVariations = (componentName, variations = null) => (props) => {
  let { color } = props
  const { variation } = props

  const colorShade = !!color && typeof color === 'string' && color.match(colorShadeRegex)

  let shade
  if (colorShade) {
    color = colorShade[1]
    shade = colorShade[2]
  }

  const isValidShade = shade && typeof shade === 'string'

  if (variations && typeof variation === 'string') {
    if (isValidShade) {
      // prettier-ignore
      return css`${variations[variation] || ''}
          ${typeof color === 'string' &&
          themeGet(`componentStyles.${componentName}.${variation}.${color}.${shade}`, '')}`
    }

    // prettier-ignore
    return css`${variations[variation] || ''}
        ${typeof color === 'string' && themeGet(`componentStyles.${componentName}.${variation}.${color}`, '')}`
  }

  if (isValidShade) {
    // prettier-ignore
    return css`${themeGet(`componentStyles.${componentName}.${color}.${shade}`, '')}`
  }

  // prettier-ignore
  return css`${themeGet(`componentStyles.${componentName}.${color}`, '')}`
}

/**
 * Gets the color of a palette shade, using props.color as
 * the palette color. If palette shade does not exist, falls
 * back to theme.colors
 *
 * @example getPaletteColor('dark')(props) =\> will return the dark
 * shade of theme.palette[props.color].dark
 * @example getPaletteColor('primary.base')(props) =\> theme.palette.primary.base
 * @example getPaletteColor('primary', 'base')(props) =\> theme.palette.primary.base
 */
export const getPaletteColor = (...args) => (props) => {
  let color = args.length === 2 ? args[0] : props.color
  let shade = args.length === 2 ? args[1] : args[0]

  const colorShade = shade.match(colorShadeRegex)

  if (colorShade) {
    color = colorShade[0]
    shade = colorShade[1]
  }

  return (
    themeGet(`palette.${color}.${shade}`)(props) ||
    themeGet(`palette.${color}`)(props) ||
    themeGet(`colors.${color}`)(props)
  )
}

export const getValidPaletteColor = (color) => (props) => {
  if (!color || typeof color !== 'string') {
    return null
  }

  const [col, shade] = color.split('.')
  const newColor = `${col}.${shade || 'base'}`

  if (hasPaletteColorShade(props, newColor)) {
    return getPaletteColor(newColor)(props)
  }

  return null
}

/**
 * Gets css styles that make links more accessible depending on a given background color
 *
 * @param name       - The name of the background color
 * @param lightColor - Optional light color to use if it meets the contrast ratio, default is text.lightest
 * @param darkColor  - Optional dark color to use if it meets the contrast ratio, default is text.base
 * @param isBold     - Determines the font weight if an alternative color for the link is picked
 */
export const getLinkStylesOn = (
  name,
  lightColor = 'text.lightest',
  darkColor = 'text.base',
  isBold = false
) => (props) => {
  const { theme } = props

  if (theme.palette) {
    const backgroundColor = getPaletteColor(name)(props)
    const linkColor = theme.palette.primary.base

    lightColor = getValidPaletteColor(lightColor)(props)
    darkColor = getValidPaletteColor(darkColor)(props)

    if (backgroundColor) {
      const hasDefaultContrast = getContrastRatio(backgroundColor, linkColor) >= theme.contrastRatio
      const hasLightContrast = getContrastRatio(backgroundColor, lightColor) >= theme.contrastRatio

      if (!hasDefaultContrast) {
        const fontWeight = isBold ? 'bold' : 'inherit'
        const contrastLinkColor = hasLightContrast ? lightColor : darkColor
        // prettier-ignore
        return css`color: ${contrastLinkColor}; font-weight: ${fontWeight}; text-decoration: underline; :hover { color: ${contrastLinkColor}; }`
      }
    }
  }

  return ''
}

/**
 * Gets the text color that belongs on a given background color
 *
 * @param name - The name of the background color
 *
 */
export const getTextColorOn = (name, lightColor = null, darkColor = null) => (props) => {
  const { theme } = props

  if (theme.palette) {
    const color = getPaletteColor(name)(props)
    const text = theme.palette.text

    lightColor = getValidPaletteColor(lightColor)(props) || text.lightest
    darkColor = getValidPaletteColor(darkColor)(props) || text.base

    if (color) {
      return getContrastRatio(lightColor, color) >= theme.contrastRatio ? lightColor : darkColor
    }

    return darkColor
  }

  return ''
}

// prettier-ignore
export const getByPalette = (props) => css`background-color: ${getPaletteColor(props.bg, 'base')(props)};color: ${getPaletteColor(props.color, 'base')(props)};`

/**
 * Extended color function from styled-system. First checks
 * for a palette color before falling back to styled-system
 */
export const color = (props) => {
  if (!props.theme || (!props.color && !props.bg)) {
    return ''
  } else if (props.color === 'text') {
    return props.color && props.bg
      ? getByPalette(props)
      : // prettier-ignore
        css`color: ${getPaletteColor('base')(props)};`
  } else if (props.color && props.bg) {
    return getByPalette(props)
  } else if (props.color && hasPaletteColor(props)) {
    // prettier-ignore
    return css`background-color: ${getPaletteColor('base')(props)};
color: ${getTextColorOn('base')(props)};`
  } else if (props.color) {
    // prettier-ignore
    return css`color: ${getPaletteColor('base')(props)};`
  } else {
    // prettier-ignore
    return css`background-color: ${getPaletteColor(props.bg, 'base')(props)};`
  }
}

export const borders = (props) => {
  const borderColor = props.color ? getPaletteColor('base')(props) : getPaletteColor('border.base')(props)
  const focusColor = props.color ? borderColor : getPaletteColor('primary.base')(props)

  return {
    'border-color': borderColor,
    ':focus': {
      outline: 0,
      'border-color': focusColor,
      'box-shadow': `0 0 0 2px ${focusColor}`,
    },
  }
}
