import React from 'react'
import styled from 'styled-components'
import { Text, type TextProps } from '../Text/Text'

/**
 * @public
 */
export type TruncateProps = TextProps

const StyledTruncate = styled(Text)<TruncateProps>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

/**
 * A text component that clips overflow content with an ellipsis.
 *
 * Extends Text with single-line truncation. Content that exceeds the available
 * width displays "..." at the end. Set an explicit `width` or use within a
 * constrained parent container for truncation to work.
 *
 * @public
 */
export const Truncate = React.forwardRef<HTMLDivElement, TruncateProps>((props, ref) => (
  <StyledTruncate ref={ref} {...props} />
))
Truncate.displayName = 'Truncate'
