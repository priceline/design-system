const deepmerge = require('deepmerge')

import { theme as defaultTheme } from '../theme/theme'
import { createTextStyles, createColorStyles, createMediaQueries, createPalette } from '.'

/**
 * Adds aliases to an array of keys
 *
 * @param arr - The array to add aliases to
 */
const addAliases = (arr) => {
  arr.forEach((val, key) => {
    arr[['sm', 'md', 'lg', 'xl', 'xxl'][key]] = val
  })

  return arr
}

/**
 * Create the theme
 * @param existingTheme -     Existing theme passed from a parent provider (Undefined if it's most outer provider)
 * @param theme -             The theme to merge against the default
 * @param customBreakpoints - Custom breakpoints for the theme
 *
 * @returns The generated theme
 */
const createTheme = (existingTheme = defaultTheme, theme = {}, customBreakpoints = null) => {
  const mergedTheme = deepmerge(defaultTheme, existingTheme)
  const finalMergedTheme = deepmerge(mergedTheme, theme)
  const mediaQueries = customBreakpoints
    ? createMediaQueries(customBreakpoints)
    : finalMergedTheme.mediaQueries
  return {
    ...finalMergedTheme,
    contrastRatio: finalMergedTheme.contrastRatio || 2.6,
    breakpoints: addAliases(customBreakpoints || finalMergedTheme.breakpoints),
    mediaQueries: addAliases(mediaQueries),
    palette: createPalette(finalMergedTheme),
    colorStyles: createColorStyles(finalMergedTheme),
    textStyles: createTextStyles(finalMergedTheme),
  }
}

export { createTheme }
