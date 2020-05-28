// TypeScript Version: 3.0
// Project: pcln-design-system

/// <reference types="@types/styled-system" />

import * as React from 'react'
import {
  BorderColorProps,
  BorderRadiusProps,
  BottomProps,
  ColorProps,
  FlexDirectionProps,
  FlexWrapProps,
  FontSizeProps,
  FontWeightProps,
  JustifyContentProps,
  LeftProps,
  LineHeightProps,
  RightProps,
  SpaceProps,
  TextAlignProps,
  TextColorProps,
  TextStyleProps,
  Theme,
  TopProps,
  WidthProps,
  ZIndexProps,
} from 'styled-system'

export interface TopRightBottomLeft
  extends TopProps,
    RightProps,
    BottomProps,
    LeftProps {}

/**
 * Combining Styled System interfaces depending on which Styled System functions
 * the component uses
 */
type AbsoluteProps = TopRightBottomLeft

export interface BoxProps
  extends ColorProps,
    WidthProps,
    SpaceProps,
    TextAlignProps {}

export interface FlexProps
  extends BoxProps,
    SpaceProps,
    WidthProps,
    TextColorProps,
    TextAlignProps,
    JustifyContentProps,
    FlexWrapProps,
    FlexDirectionProps {}

export interface HideProps extends BoxProps {
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  xxl?: boolean
  print?: boolean
}

export interface CardProps
  extends BoxProps,
    BorderRadiusProps,
    BorderColorProps,
    TextColorProps {
  boxShadowSize?: 'sm' | 'md' | 'lg' | 'xl'
  borderWidth?: 0 | 1 | 2
}

export interface RelativeProps extends TopRightBottomLeft, BoxProps, ZIndexProps {}

export interface TextProps
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
}

export interface ThemeProviderProps {
  theme?: Theme
  customBreakpoints?: string[]
}

//
// pcln-design-system components
// ------------------------------------------------------------

export class Absolute extends React.Component<AbsoluteProps, any> {}
export class Avatar extends React.Component<any, any> {}
export class BackgroundImage extends React.Component<any, any> {}
export class Badge extends React.Component<any, any> {}
export class Banner extends React.Component<any, any> {}
export class BlockLink extends React.Component<any, any> {}
export class Box extends React.Component<BoxProps, any> {}
export class Breadcrumbs extends React.Component<any, any> {
  static Link
}
export class Button extends React.Component<any, any> {}
export class Card extends React.Component<CardProps, any> {}
export class Checkbox extends React.Component<any, any> {}
export class CloseButton extends React.Component<any, any> {}
export class Container extends React.Component<any, any> {}
export class Divider extends React.Component<any, any> {}
export class Flag extends React.Component<any, any> {}
export class Flex extends React.Component<FlexProps, any> {}
export class FormField extends React.Component<any, any> {}
export class Heading extends React.Component<any, any> {
  static h1
  static h2
  static h3
  static h4
  static h5
  static h6
}
export class Hide extends React.Component<HideProps, any> {}
export class Hug extends React.Component<any, any> {}
export class Icon extends React.Component<any, any> {}
export class IconButton extends React.Component<any, any> {}
export class IconField extends React.Component<any, any> {}
export class Image extends React.Component<any, any> {}
export class Input extends React.Component<any, any> {
  static isField: boolean
}
export class InputGroup extends React.Component<any, any> {}
export class Label extends React.Component<any, any> {
  static isLabel: boolean
}
export class Link extends React.Component<any, any> {}
export class PlaceholderImage extends React.Component<any, any> {}
export class Radio extends React.Component<any, any> {}
export class RatingBadge extends React.Component<any, any> {}
export class Relative extends React.Component<RelativeProps, any> {}
export class Select extends React.Component<any, any> {
  static isField: boolean
}
export class Stamp extends React.Component<any, any> {}
export class Stepper extends React.Component<any, any> {
  static Step
}
export class SrOnly extends React.Component<any, any> {}
export class Text extends React.Component<TextProps, any> {
  /** Span element */
  static span
  /** Paragraph element */
  static p
  /** Strikethrough element */
  static s
}
export class TextArea extends React.Component<any, any> {
  static isField: boolean
}
export class ThemeProvider extends React.Component<ThemeProviderProps, any> {}
export class ToggleBadge extends React.Component<any, any> {}
export class Tooltip extends React.Component<any, any> {}
export class Truncate extends React.Component<any, any> {}

//
// pcln-design-system utils
// ------------------------------------------------------------

export interface ThemeArgs {
  theme: Theme
}

export function getContrastRatio(colorA: string, colorB: string): number
export function deprecatedPropType(replacement: string): Error | undefined
export function borders(props: ThemeArgs): object
export function hasPaletteColor(props: ThemeArgs): boolean
