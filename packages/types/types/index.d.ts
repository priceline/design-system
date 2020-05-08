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
  color?: string
  theme: Theme
}

//
// pcln-design-system components
// ------------------------------------------------------------

// TODO add remaining component type declarations
export class Card extends React.Component<any, any> {}
export class Text extends React.Component<any, any> {}
export class Select extends React.Component<any, any> {}
export class Label extends React.Component<any, any> {}
export class Box extends React.Component<any, any> {}

//
// pcln-design-system utils
// ------------------------------------------------------------
export function getContrastRatio(colorA: string, colorB: string): number
export function deprecatedPropType(replacement: string): Error | undefined

export function borders(props: ThemeArgs): object

export function hasPaletteColor(props: ThemeArgs): boolean
