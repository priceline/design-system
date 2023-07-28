export enum VariationType {
  Base = 'base',
  Light = 'light',
  Dark = 'dark',
}

export const VARIATION_BACKGROUND_COLORS = {
  [VariationType.Base]: '#EEEEEE',
  [VariationType.Light]: '#00000014',
  [VariationType.Dark]: '#FFFFFF14',
}

export const VARIATION_GLARE_GRADIENTS = {
  [VariationType.Base]: `
      rgba(245, 245, 245, 0) 0%,
      rgba(245, 245, 245, 1) 50%,
      rgba(245, 245, 245, 0) 100%`,
  [VariationType.Light]: `
      rgba(255, 255, 255, 0.0001) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0.0001) 100%`,
  [VariationType.Dark]: `
      rgba(255, 255, 255, 0.0001) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.0001) 100%`,
}
