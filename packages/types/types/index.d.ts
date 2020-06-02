// TypeScript Version: 3.0
// Project: pcln-design-system

/// <reference types="@types/styled-system" />

/* Note: Using this syntax instead of synthetic default export because we shouldn't assume the TS compiler
 * options used by DS consumers. */
import * as React from 'react'

import {
  AlignItemsProps,
  BorderColorProps,
  BorderRadiusProps,
  BordersProps,
  BottomProps,
  FlexDirectionProps,
  FlexWrapProps,
  FontSizeProps,
  FontWeightProps,
  JustifyContentProps,
  LeftProps,
  LineHeightProps,
  ResponsiveValue,
  RightProps,
  SizeProps,
  SpaceProps,
  TextAlignProps,
  TextColorProps,
  TextStyleProps,
  Theme,
  TLengthStyledSystem,
  TopProps,
  WidthProps,
  ZIndexProps,
} from 'styled-system'
import * as CSS from 'csstype'

/**
 * Helper interfaces
 */
export interface ColorValidation {
  color?: PropValidator
}

export interface ReactRefObject {
  current: any
}

export interface ClassNameProps {
  className?: string
}

export interface TopRightBottomLeft
  extends TopProps,
    RightProps,
    BottomProps,
    LeftProps {}

export type RefPropType = (() => any) | ReactRefObject

export type PropValidator = undefined | never

export interface DsRefProps {
  dsRef?: (() => any) | ReactRefObject
}

export interface IdProps {
  id: string
}

export interface ColorProps<TLength = TLengthStyledSystem> {
  /**
   * DEPRECATED: Use "color" prop instead.
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

/**
 * Combining Styled System interfaces depending on which Styled System functions
 * the component uses
 */
export type AbsoluteProps = TopRightBottomLeft

export interface BackgroundImageProps extends WidthProps {
  height?: string
  /** URL of background image */
  image?: string
  variation?: 'parallax' | 'static'
}

export interface BadgeProps extends ColorProps, SpaceProps {
  size?: 'small' | 'medium'
}

export interface BoxProps
  extends ColorProps,
    WidthProps,
    SpaceProps,
    TextAlignProps {}

export interface ButtonBaseProps
  extends ColorProps,
    SpaceProps,
    WidthProps,
    React.ButtonHTMLAttributes<any> {
  dsRef?: RefPropType
}

export interface ButtonProps extends ButtonBaseProps {
  size?: 'small' | 'medium' | 'large'
  variation?: 'fill' | 'outline' | 'link'
  /** DEPRECATED: Use "width" prop instead */
  fullWidth?: boolean
}

export interface BreadcrumbLinkProps {
  /** This is the last link in the breadcrumbs list */
  isLastChild?: boolean
  href?: string
  icon?: React.ComponentElement<IconProps, any>
  label?: string
  dsRef?: RefPropType
  onClick?: (any) => void
}

export interface FlexProps
  extends BoxProps,
    JustifyContentProps,
    FlexWrapProps,
    AlignItemsProps,
    FlexDirectionProps {
  /** DEPRECATED: Use "flexWrap" prop instead */
  wrap?: ResponsiveValue<CSS.FlexWrapProperty>
  /** DEPRECATED: Use "alignItems" prop instead */
  align?: ResponsiveValue<CSS.AlignItemsProperty>
  /** DEPRECATED: Use "justifyContent" prop instead */
  justify?: ResponsiveValue<CSS.JustifyContentProperty>
}

export interface HideProps extends BoxProps {
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  xxl?: boolean
  print?: boolean
}

export interface IconProps extends ColorProps, SizeProps {
  name?: string
  title?: string
  titleId?: string
  desc?: string
  descId?: string
}

export interface IconButtonProps extends ButtonProps {
  icon?: React.ComponentElement<IconProps, any>
}

export interface CardProps
  extends BoxProps,
    BorderRadiusProps,
    BorderColorProps {
  boxShadowSize?: 'sm' | 'md' | 'lg' | 'xl'
  borderWidth?: 0 | 1 | 2
}

export interface CloseButtonProps
  extends ButtonBaseProps,
    ColorProps,
    SpaceProps,
    WidthProps {
  dsRef?: RefPropType
  size?: number
  variation?: 'fill' | 'outline' | 'link'
  /** DEPRECATED: Use "width" prop instead */
  fullWidth?: boolean
  title?: string
}

export interface ImageProps extends WidthProps {
  height?: string
  alt?: string
  src: string
}

export interface LinkProps extends TextColorProps {
  variation?: 'fill' | 'link' | 'outline'
  dsRef?: RefPropType
}

export interface PlaceholderImageProps {
  /** Alternate text */
  alt?: string
  /** Sets aria-hidden attribute */
  ariaHidden?: boolean
  /** Image should be blurred */
  blur?: boolean
  /** Choose a specific placeholder image from the array of default images */
  chooseSrc?: string
  /** Sets img height attribute */
  height?: string
  /** Sets img width attribute */
  width?: string
}

export interface RatingBadgeProps
  extends BoxProps,
    BorderRadiusProps,
    FontWeightProps {}

export interface RelativeProps
  extends TopRightBottomLeft,
    BoxProps,
    ZIndexProps {}

export interface StepProps extends ButtonProps, ClassNameProps {
  active?: boolean
  completed?: boolean
}

export interface ToggleBadgeProps
  extends ColorProps,
    FontSizeProps,
    SpaceProps {
  dsRef?: RefPropType
  selected?: boolean
  unSelectedBg?: string
}

export interface TextProps<TLength = TLengthStyledSystem>
  extends TextStyleProps,
    FontSizeProps,
    FontWeightProps,
    TextAlignProps,
    LineHeightProps,
    SpaceProps,
    TextColorProps {
  /** Sets font-weight: props.theme.regular */
  regular?: boolean
  /** Sets font-weight: props.theme.bold */
  bold?: boolean
  /** Sets styles for all-caps type treatments */
  caps?: boolean
  /** Sets styles for italic type treatments */
  italic?: boolean
  enableTextShadow?: boolean
  textShadowSize?: 'sm' | 'md'
  /** DEPRECATED: Use "textAlign" prop instead */
  align?: ResponsiveValue<CSS.TextAlignProperty>
  /** Sets background color */
  bg?: ResponsiveValue<CSS.BackgroundProperty<TLength>>
}

export interface ThemeProviderProps {
  theme?: Theme
  customBreakpoints?: string[]
}

export interface DividerProps
  extends ColorProps,
    SpaceProps,
    WidthProps,
    BorderColorProps {}

export interface AvatarProps extends ClassNameProps, ColorProps {
  /** Heading displayed with avatar */
  title?: string
  /** Subheading displayed beneath heading */
  subtitle?: string
  src?: string
  /** Alternative initials to display when src is not provided */
  initials?: string
  /** Size in px to use for height, width, and background-size */
  size?: number
}

export interface BannerProps extends BoxProps {
  header?: string | React.ReactNode
  icon?: React.ComponentElement<IconProps, any>
  onClose?: (any) => void
  showIcon?: boolean
  text?: string | React.ReactNode
}

export interface StampProps extends SpaceProps, FontSizeProps, ColorProps {
  variation?: 'outline' | 'fill' | 'solid'
  size?: 'small' | 'medium'
}

export interface ContainerProps {
  maxWidth?: number
}

export interface FlagProps extends FlexProps, WidthProps {}

export interface HugProps extends CardProps {
  iconDisplay?: string[]
  icon?: React.ComponentElement<IconProps, any>
  text?: React.ReactNode | string
}

export interface TooltipProps extends BoxProps {
  zIndex?: number | string
  bottom?: boolean
  top?: boolean
  center?: boolean
  left?: boolean
  right?: boolean
}

export interface CheckboxProps extends DsRefProps, ColorValidation {
  id: string
  size?: number
  onChange: () => void
}

export interface LabelProps
  extends SpaceProps,
    FontSizeProps,
    FontWeightProps,
    WidthProps,
    TextColorProps {}

export interface RadioProps extends TextColorProps, DsRefProps {
  size?: number
}

export interface SelectProps
  extends DsRefProps,
    SpaceProps,
    FontSizeProps,
    TextColorProps,
    BordersProps {}

export interface TextAreaProps
  extends TextColorProps,
    DsRefProps,
    BordersProps,
    SpaceProps,
    IdProps {}

export interface InputProps
  extends DsRefProps,
    BordersProps,
    SpaceProps,
    TextColorProps,
    FontSizeProps {}

export interface InputGroupProps extends SpaceProps, BorderColorProps {}

//
// pcln-design-system components
// ------------------------------------------------------------

export class Absolute extends React.Component<AbsoluteProps> {}
export class Avatar extends React.Component<AvatarProps> {}
export class BackgroundImage extends React.Component<BackgroundImageProps> {}
export class Badge extends React.Component<BadgeProps> {}
export class Banner extends React.Component<BannerProps> {}
export class BlockLink extends React.Component<LinkProps> {}
export class Box extends React.Component<BoxProps> {}
export class Breadcrumbs extends React.Component<any> {
  static Link: typeof BreadcrumbLink
}
export class BreadcrumbLink extends React.Component<BreadcrumbLinkProps> {}
export class Button extends React.Component<ButtonProps> {}
export class Card extends React.Component<CardProps> {}
export class Checkbox extends React.Component<
  CheckboxProps & React.HTMLProps<HTMLInputElement>
> {}
export class CloseButton extends React.Component<CloseButtonProps> {}
export class Container extends React.Component<ContainerProps> {}
export class Divider extends React.Component<DividerProps> {}
export class Flag extends React.Component<FlagProps> {}
export class Flex extends React.Component<FlexProps> {}
export class FormField extends React.Component<any> {}
export class Heading extends React.Component<TextProps> {
  static h1: typeof Heading
  static h2: typeof Heading
  static h3: typeof Heading
  static h4: typeof Heading
  static h5: typeof Heading
  static h6: typeof Heading
}
export class Hide extends React.Component<HideProps> {}
export class Hug extends React.Component<any> {}
export class Icon extends React.Component<IconProps> {}
export class IconButton extends React.Component<IconButtonProps> {}
export class IconField extends React.Component<FlexProps> {}
export class Image extends React.Component<ImageProps> {}
export class Input extends React.Component<
  InputProps & React.HTMLProps<HTMLButtonElement>
> {
  static isField: boolean
}
export class InputGroup extends React.Component<InputGroupProps> {}
export class Label extends React.Component<
  LabelProps & React.HTMLProps<HTMLLabelElement>
> {
  static isLabel: boolean
}
export class Link extends React.Component<LinkProps> {}
export class PlaceholderImage extends React.Component<PlaceholderImageProps> {}
export class Radio extends React.Component<
  RadioProps & React.HTMLProps<HTMLInputElement>
> {}
export class RatingBadge extends React.Component<RatingBadgeProps> {}
export class Relative extends React.Component<RelativeProps> {}
export class Select extends React.Component<
  SelectProps & React.HTMLProps<HTMLSelectElement>
> {
  static isField: boolean
}
export class Stamp extends React.Component<StampProps> {}
export class Step extends React.Component<StepProps> {}
export class Stepper extends React.Component<ClassNameProps> {
  static Step: typeof Step
}
export class SrOnly extends React.Component<any> {}
export class Text extends React.Component<TextProps> {
  /** Span element */
  static span
  /** Paragraph element */
  static p
  /** Strikethrough element */
  static s
}
export class TextArea extends React.Component<
  TextAreaProps & React.HTMLProps<HTMLTextAreaElement>
> {
  static isField: boolean
}
export class ThemeProvider extends React.Component<ThemeProviderProps> {}
export class ToggleBadge extends React.Component<ToggleBadgeProps> {}
export class Tooltip extends React.Component<TooltipProps> {}
export class Truncate extends React.Component<TextProps> {}

//
// pcln-design-system utils
// ------------------------------------------------------------

export interface ThemeArgs {
  theme: Theme
}

export interface ColorArgs extends ThemeArgs {
  color?: string
  bg?: string
}

export interface CustomBreakpoints {
  [key: string]: string | number
}

export interface PaletteColor {
  lightest?: string
  light?: string
  base: string
  dark?: string
  darkest?: string
}

export interface Palette {
  [key: string]: PaletteColor
}

export interface CreateThemeResult extends Theme {
  contrastRatio: number
  breakpoints: any[]
  mediaQueries: any[]
  palette: Palette
}

export function getContrastRatio(colorA: string, colorB: string): number
export function deprecatedPropType(replacement: string): Error | undefined
export function borders(props: ThemeArgs): object
export function hasPaletteColor(props: ThemeArgs): boolean
export function color(props: ColorArgs): string[] | string
export function getPaletteColor(
  color: string,
  shade?: string
): (props: ThemeArgs) => any
export function getTextColorOn(name: string): (props: ThemeArgs) => any
export function createTheme(
  theme: Theme,
  customBreakpoints: CustomBreakpoints
): CreateThemeResult

export type theme = Theme
