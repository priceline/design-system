import React, { type ComponentPropsWithRef } from 'react'
import styled from 'styled-components'

/**
 * @public
 */
export type SrOnlyProps = ComponentPropsWithRef<'span'>

const StyledSrOnly = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`

/**
 * A visually hidden container for screen reader-only content.
 *
 * Content is hidden from visual display but remains accessible to screen readers.
 * Use for providing additional context, descriptions, or instructions that are
 * important for accessibility but would be redundant visually.
 *
 * @public
 */
export const SrOnly = React.forwardRef<HTMLSpanElement, SrOnlyProps>((props, ref) => (
  <StyledSrOnly ref={ref} {...props} />
))
SrOnly.displayName = 'SrOnly'
