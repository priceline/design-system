import { tint } from './color'
import theme from './theme'

const black = '#000'
const white = '#fff'
const text = '#333'
const blue = '#0a84c1'
const green = '#3c910e'
const orange = '#ffaf00'
const red = '#df000f'
const gray = '#666'

const blue0 = tint(blue)(0.2)
const blue1 = tint(blue)(0.4)
const blue2 = tint(blue)(0.6)
const blue3 = tint(blue)(0.8)

const gray0 = '#d9d9d9'
const gray1 = '#ccc'
const gray2 = '#999'
const gray3 = '#666'

const green0 = '#ecf9e5'
const green1 = tint(green)(0.4)
const green2 = tint(green)(0.6)
const green3 = tint(green)(0.8)

const red0 = tint(red)(0.2)
const red1 = tint(red)(0.4)
const red2 = tint(red)(0.6)
const red3 = tint(red)(0.8)

const orange0 = tint(orange)(0.2)
const orange1 = tint(orange)(0.4)
const orange2 = tint(orange)(0.6)
const orange3 = tint(orange)(0.8)

export const colors = {
  black,
  white,
  text,
  blue,
  gray,
  green,
  orange,
  red,

  blue0,
  blue1,
  blue2,
  blue3,

  gray0,
  gray1,
  gray2,
  gray3,

  green0,
  green1,
  green2,
  green3,

  red0,
  red1,
  red2,
  red3,

  orange0,
  orange1,
  orange2,
  orange3
}

const legacyTheme = {...theme, colors}
export default legacyTheme
