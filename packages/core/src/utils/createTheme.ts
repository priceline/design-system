const deepmerge = require('deepmerge')

import { theme as defaultTheme } from '../theme/theme'
import { createTextStyles, createColorStyles, createMediaQueries, createPalette } from '.'

/**
 * Adds aliases to an array of keys
 *
 * @param {Array} arr The array to add aliases to
 */
const addAliases = (arr) => {
  arr.forEach((val, key) => {
    arr[['sm', 'md', 'lg', 'xl', 'xxl'][key]] = val
  })

  return arr
}

/**
 * Create the theme
 *
 * @param theme -             The theme to merge against the default
 * @param customBreakpoints - Custom breakpoints for the theme
 *
 * @returns The generated theme
 */
const createTheme = (theme = {}, customBreakpoints = null) => {
  const mergedTheme = deepmerge(defaultTheme, theme)

  const mediaQueries = customBreakpoints ? createMediaQueries(customBreakpoints) : mergedTheme.mediaQueries
  return {
    ...mergedTheme,
    contrastRatio: mergedTheme.contrastRatio || 2.6,
    breakpoints: addAliases(customBreakpoints || mergedTheme.breakpoints),
    mediaQueries: addAliases(mediaQueries),
    palette: createPalette(mergedTheme),
    colorStyles: createColorStyles(mergedTheme),
    textStyles: createTextStyles(mergedTheme),
  }
}

export { createTheme }
