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

// TODO add remaining component type declarations
export class Text extends React.Component<any, any> {}
export class Select extends React.Component<any, any> {}
export class Label extends React.Component<any, any> {}
export class Card extends React.Component<CardProps, any> {}
export class Box extends React.Component<BoxProps, any> {}

//
// pcln-design-system utils
// ------------------------------------------------------------
export function getContrastRatio(colorA: string, colorB: string): number
export function deprecatedPropType(replacement: string): Error | undefined

export function borders(props: ThemeArgs): object

export function hasPaletteColor(props: ThemeArgs): boolean
