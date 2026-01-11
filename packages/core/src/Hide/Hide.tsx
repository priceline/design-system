import React from 'react'
import styled from 'styled-components'
import { Box, BoxProps } from '../Box/Box'
import { Text, type TextProps } from '../Text/Text'

const getMaxWidth = (em) => parseInt(em) - 0.01

const breakpoints = (props) => ({
  xs: `@media screen and (max-width: ${getMaxWidth(props.theme.breakpoints[0])}em)`,
  sm: `@media screen and (min-width: ${props.theme.breakpoints[0]}) and (max-width: ${getMaxWidth(
    props.theme.breakpoints[1]
  )}em)`,
  md: `@media screen and (min-width: ${props.theme.breakpoints[1]}) and (max-width: ${getMaxWidth(
    props.theme.breakpoints[2]
  )}em)`,
  lg: `@media screen and (min-width: ${props.theme.breakpoints[2]}) and (max-width: ${getMaxWidth(
    props.theme.breakpoints[3]
  )}em)`,
  xl: `@media screen and (min-width: ${props.theme.breakpoints[3]}) and (max-width: ${getMaxWidth(
    props.theme.breakpoints[4]
  )}em)`,
  xxl: `@media screen and (min-width: ${props.theme.breakpoints[4]})`,
  print: `@media print`,
})

const hidden = (key) => (props) =>
  props[key]
    ? {
        [breakpoints(props)[key]]: {
          display: 'none',
        },
      }
    : null

export type HideBreakpointProps = {
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  xxl?: boolean
  print?: boolean
}

/**
 * @public
 */
export type HideProps = BoxProps & HideBreakpointProps

/**
 * @public
 */
export type HideTextProps = TextProps & HideBreakpointProps

const StyledHide = styled(Box)<HideProps>`
  ${hidden('xs')}
  ${hidden('sm')}
  ${hidden('md')}
  ${hidden('lg')}
  ${hidden('xl')}
  ${hidden('xxl')}
  ${hidden('print')};
`

const StyledHideText = styled(Text)<HideTextProps>`
  display: inline;
  ${hidden('xs')}
  ${hidden('sm')}
  ${hidden('md')}
  ${hidden('lg')}
  ${hidden('xl')}
  ${hidden('xxl')}
  ${hidden('print')};
`

export const HideText = React.forwardRef<HTMLDivElement, HideTextProps>((props, ref) => (
  <StyledHideText ref={ref} {...props} />
))
HideText.displayName = 'Hide.text'

export type HideComponent = React.ForwardRefExoticComponent<
  HideProps & React.RefAttributes<HTMLDivElement>
> & {
  text: typeof HideText
}

/**
 * Conditionally hides content at specified responsive breakpoints or for print.
 *
 * Pass boolean props (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `print`) to hide content
 * at those breakpoints. Extends `Box` for layout flexibility. Use `Hide.text` for
 * inline text that needs responsive visibility control.
 *
 * @public
 */
export const Hide: HideComponent = React.forwardRef<HTMLDivElement, HideProps>((props, ref) => (
  <StyledHide ref={ref} {...props} />
)) as HideComponent
Hide.displayName = 'Hide'

Hide.text = HideText
