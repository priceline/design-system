import { tint } from './color'

const black = '#000'
const white = '#fff'
const blue = '#0a84c1'
const green = '#3c910e'
const orange = '#ffaf00'
const red = '#df000f'
const gray = '#666'

const blue0 = '#cae4f2'
// const blue1 =
// const blue2 =
// const blue3 =

const gray0 = '#d9d9d9'
const gray1 = '#ccc'
const gray2 = '#999'
const gray3 = '#666'

const green0 = '#ecf9e5'
const green1 = '#d1efc0'
const green2 = tint(green)(0.6)
const green3 = tint(green)(0.8)

const red0 = '#ffced1'

// const grays = [
//   '#333',
//   '#666',
//   '#999',
//   '#ccc',
//   '#d9d9d9',
//   '#f2f2f2'
// ]

/* reference from SITE/design-system */
const dsColors = {
  contrastBlue: '#085397',
    // blue
    // pricelineBlue: '#0a84c1',
  secondaryBlue: '#60afd7',
  extraBlue: '#cae4f2',
  blueFooterLinks: '#9fddff',

  notification: '#f2633a',
  orange2: '#ff9600',
  orange3: '#ffaf00',

  primaryGreen: '#3c910e',
  secondaryGreen: '#47a216',
  tertiaryGreen: '#d1efc0',
  extraGreen: '#8cc36f',
  successBg: '#ecf9e5',

  black80: '#333',
  black60: '#666',
  black40: '#999',
  black20: '#ccc',
  black15: '#d9d9d9',
  black5: '#f2f2f2',

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
  gray,
  green,
  orange,
  red,

  blue0,

  gray0,
  gray1,
  gray2,
  gray3,

  green0,
  green1,
  green2,
  green3,

  red0,
}, dsColors)

export default colors

