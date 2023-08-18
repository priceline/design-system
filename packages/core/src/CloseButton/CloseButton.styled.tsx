export const closeButtonSizes = ['sm', 'md', 'lg'] as const
export type CloseButtonSize = (typeof closeButtonSizes)[number]

// TODO: adjust these values
export const closeButtonIconSizes: Record<CloseButtonSize, number> = {
  sm: 16,
  md: 24,
  lg: 32,
}
