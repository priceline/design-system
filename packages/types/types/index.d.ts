// TypeScript Version: 3.0
// Project: pcln-design-system

/// <reference types="@types/styled-system" />

import * as React from 'react'
import {
  LayoutProps,
  ColorProps,
  BackgroundColorProps,
  SpaceProps,
  BoxShadowProps,
  BorderRadiusProps,
  Theme,
  BorderWidthProps,
  MarginProps,
  FontSizeProps,
  TextAlignProps
} from 'styled-system'

/**
 * Combining Styled System interfaces depending on which Styled System functions
 * the component uses
 */
export interface BoxProps
  extends LayoutProps,
    ColorProps,
    BackgroundColorProps,
    SpaceProps {}

/**
 * Extend primitive Design System components to create interfaces for more complex
 * components
 */
export interface CardProps
  extends BoxProps,
    BoxShadowProps,
    BorderRadiusProps,
    BorderWidthProps {}

export interface TextProps
  extends MarginProps,
    ColorProps,
    FontSizeProps,
    TextAlignProps {
  /** Sets font-weight: props.theme.regular */
  regular?: boolean
  /** Sets font-weight: props.theme.bold */
  bold?: boolean
  /** Sets styles for all-caps type treatments */
  caps?: boolean
  /** Sets styles for italic type treatments */
  italic?: boolean
}

//
// pcln-design-system components
// ------------------------------------------------------------

export class Absolute extends React.Component<any, any> {}
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
export class Flex extends React.Component<any, any> {}
export class FormField extends React.Component<any, any> {}
export class Heading extends React.Component<any, any> {
  static h1
  static h2
  static h3
  static h4
  static h5
  static h6
}
export class Hide extends React.Component<any, any> {}
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
export class Relative extends React.Component<any, any> {}
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
export class ThemeProvider extends React.Component<any, any> {}
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
