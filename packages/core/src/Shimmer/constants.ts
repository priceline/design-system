/**
 * @public
 */
export enum ShimmerVariationType {
  Base = 'base',
  Light = 'light',
  Dark = 'dark',
}

/**
 * @public
 */
export type ShimmerVariation = 'base' | 'light' | 'dark'

export const VARIATION_BACKGROUND_COLORS = {
  [ShimmerVariationType.Base]: '#EEEEEE',
  [ShimmerVariationType.Light]: '#00000014',
  [ShimmerVariationType.Dark]: '#FFFFFF14',
}

export const VARIATION_GLARE_GRADIENTS = {
  [ShimmerVariationType.Base]: `
      rgba(245, 245, 245, 0) 0%,
      rgba(245, 245, 245, 1) 50%,
      rgba(245, 245, 245, 0) 100%`,
  [ShimmerVariationType.Light]: `
      rgba(255, 255, 255, 0.0001) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0.0001) 100%`,
  [ShimmerVariationType.Dark]: `
      rgba(255, 255, 255, 0.0001) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.0001) 100%`,
}
