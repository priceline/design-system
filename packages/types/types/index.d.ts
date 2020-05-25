// TypeScript Version: 3.0
// Project: pcln-design-system

import * as React from 'react'

//
// Constants and objects
// ------------------------------------------------------------
export interface Theme {
  breakpoints: string[]
  mediaQueries: string[]
  space: number[]
  font: string
  fontSizes: number[]
  fontWeights: object
  lineHeights: object
  letterSpacings: object
  regular: number
  bold: number
  textStyles: object
  colors: object
  colorStyles: object
  radii: number[]
  radius: string
  boxShadows: string[]
  textShadows: object
  maxContainerWidth: string
  duration: object
  timingFunctions: object
  transitionDelays: object
}

export interface ThemeArgs {
  theme: Theme
}

/**
 * Pieces of the Styled System API represented as interfaces
 */
export interface SpaceProps {
  margin?: string
  m?: string
  marginTop?: string
  mt?: string
  // add rest of props
}

export interface ColorProps {
  color?: string
  bg?: string
  backgroundColor?: string
}

export interface TypographyProps {
  fontSize?: number | string | Array<number | string>
  textAlign?: string | string[]
  // add rest of props
}

export interface LayoutProps {
  width?: number | string | Array<number | string>
  display?: string | string[]
  // add rest of props
}

export interface FlexboxProps {
  alignItems?: string
  alignContent?: string
  justifyItems?: string
  justifyContent?: string
  flexWrap?: string
  flexDirection?: string
  flex?: string
  flexGrow?: string
  flexShrink?: string
  flexBasis?: string
  justifySelf?: string
  alignSelf?: string
  order?: string
}

// Grid Layout
// TODO

export interface Background {
  background?: string
  backgroundImage?: string
  backgroundSize?: string
  backgroundPosition?: string
  backgroundRepeat?: string
}

// Border
// TODO

// Position
// TODO

// Shadow
// TODO

// Variants
// TODO

/**
 * Combining Styled System interfaces depending on which Styled System functions
 * the component uses
 */
export interface BoxProps
  extends LayoutProps,
    TypographyProps,
    ColorProps,
    SpaceProps {}

/**
 * Extend primitive Design System components to create interfaces more complex
 * components
 */
export interface CardProps extends BoxProps {
  boxShadowSize?: string
  borderRadius?: number | string
  borderWidth?: number
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
export class Breadcrumbs extends React.Component<any, any> {}
export class Button extends React.Component<any, any> {}
export class Card extends React.Component<CardProps, any> {}
export class Checkbox extends React.Component<any, any> {}
export class CloseButton extends React.Component<any, any> {}
export class Container extends React.Component<any, any> {}
export class Divider extends React.Component<any, any> {}
export class Flag extends React.Component<any, any> {}
export class Flex extends React.Component<any, any> {}
export class FormField extends React.Component<any, any> {}
export class Heading extends React.Component<any, any> {}
export class Hide extends React.Component<any, any> {}
export class Hug extends React.Component<any, any> {}
export class Icon extends React.Component<any, any> {}
export class IconButton extends React.Component<any, any> {}
export class IconField extends React.Component<any, any> {}
export class Image extends React.Component<any, any> {}
export class Input extends React.Component<any, any> {}
export class InputGroup extends React.Component<any, any> {}
export class Label extends React.Component<any, any> {}
export class Link extends React.Component<any, any> {}
export class PlaceholderImage extends React.Component<any, any> {}
export class Radio extends React.Component<any, any> {}
export class RatingBadge extends React.Component<any, any> {}
export class Relative extends React.Component<any, any> {}
export class Select extends React.Component<any, any> {}
export class Stamp extends React.Component<any, any> {}
export class Stepper extends React.Component<any, any> {}
export class Text extends React.Component<any, any> {}
export class TextArea extends React.Component<any, any> {}
export class ToggleBadge extends React.Component<any, any> {}
export class Tooltip extends React.Component<any, any> {}
export class Truncate extends React.Component<any, any> {}

//
// pcln-design-system utils
// ------------------------------------------------------------
export function getContrastRatio(colorA: string, colorB: string): number
export function deprecatedPropType(replacement: string): Error | undefined
export function borders(props: ThemeArgs): object
export function hasPaletteColor(props: ThemeArgs): boolean
