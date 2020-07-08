declare interface PaletteColor {
  lightest?: string
  light?: string
  base: string
  dark?: string
  darkest?: string
}

declare interface Palette {
  primary: PaletteColor
  secondary: PaletteColor
  text: PaletteColor
  success: PaletteColor
  error: PaletteColor
  warning: PaletteColor
  alert: PaletteColor
  caution: PaletteColor
  notify: PaletteColor
  pricePrimary: PaletteColor
  priceSecondary: PaletteColor
  strike: PaletteColor
  promoPrimary: PaletteColor
  promoSecondary: PaletteColor
  border: PaletteColor
  background: PaletteColor
}
