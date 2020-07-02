import { ResponsiveValue, TLengthStyledSystem } from 'styled-system'
import * as CSS from 'csstype'

declare interface ColorProps<TLength = TLengthStyledSystem> {
  /**
   * @deprecated Use "color" prop instead.
   *
   * The "bg" prop will be removed in v4 in favor of "color", which sets both the background
   * and font color. Font color is based on the background color set via the "color" prop. This is
   * to avoid accessibility issues with certain combinations of text and background colors.
   *
   * [See GitHub issue for more details](https://github.com/priceline/design-system/issues/650)
   */
  bg?: ResponsiveValue<CSS.BackgroundProperty<TLength>>

  /**
   * Sets the background color of the component to the given semantic color. Also sets the text color
   * based on the theme and the given semantic color name to ensure an accessible contrast level.
   *
   * [See the docsite for the list of semantic color names](https://priceline.github.io/design-system/palette)
   */
  color?: string // TODO replace with type that enumerates semantic color names, as well as combinations of colors and shades
}
