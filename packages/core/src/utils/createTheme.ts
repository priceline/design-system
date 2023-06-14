import type { DesignSystemTheme } from '../theme/theme'

import deepmerge from 'deepmerge'

import { theme as defaultTheme } from '../theme/theme'
import { createTextStyles } from './createTextStyles'
import { createColorStyles } from './createColorStyles'
import { createMediaQueries } from './createMediaQueries'
import { createPalette } from './createPalette'

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
 * @param theme -             The theme to merge against the default
 * @param customBreakpoints - Custom breakpoints for the theme
 * @param existingTheme -     Existing theme passed from a parent provider (Undefined if it's most outer provider)
 *
 * @returns The generated theme
 */
export const createTheme = (
  theme = {},
  customBreakpoints = null,
  existingTheme = defaultTheme
): DesignSystemTheme => {
  const finalMergedTheme: DesignSystemTheme = deepmerge(existingTheme, theme)
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
