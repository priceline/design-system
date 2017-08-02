
const black = '#000'
const white = '#fff'
const blue = '#0a84c1'
const green = '#3c910e'
const orange = '#f2633a'
const red = '#b01408'

const grays = [
  '#333',
  '#666',
  '#999',
  '#ccc',
  '#d9d9d9',
  '#f2f2f2'
]

/* reference from SITE/design-system */
const dsColors = {
  contrastBlue: '#085397',   // dark blue (headers)
  pricelineBlue: '#0a84c1',   // priceline blue (links & background)
  secondaryBlue: '#60afd7',   // mid blue
  extraBlue: '#cae4f2',   // light blue
  blueFooterLinks: '#9fddff',   // light blue for links on dark

  notification: '#f2633a',   // bright orange (savings)
  orange2: '#ff9600',   // mid orange
  orange3: '#ffaf00',   // used for headers on pcln blue background

  primaryGreen: '#3c910e',    // green (prices, buttons)
  secondaryGreen: '#47a216',
  tertiaryGreen: '#d1efc0',
  extraGreen: '#8cc36f',
  successBg: '#ecf9e5',    //background green for success messaging

  black80: '#333',    // dark gray (default text color)
  black60: '#666',
  black40: '#999',    // medium gray (labels)
  black20: '#ccc',
  black15: '#d9d9d9',   // used for: input and select borders
  black5: '#f2f2f2',   // light gray (gray background / default hr)

  // white: '#fff',
  // black: '#000',
  fadedWhite: '#9dddff', //used for: white button hovers

  primaryRed: '#b01408',
  contrastRed: '#df000f',
  tertiaryRed: '#ffced1',

  // ERRORS AND NOTICES
  warning: '#ffe96e',                 // warnings
  warningBg: '#f7d757',

  saleRed: '#b01408',                    //errors /cancel
  errorBg: '#fedfe1',                  //error background
  errorRed: '#e21408'
}

export const colors = Object.assign({}, {
  black,
  white,
  blue,
  green,
  grays,
  orange,
  red,
}, dsColors)

export default colors

