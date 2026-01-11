import React from 'react'
import styled from 'styled-components'
import type { LinkProps } from '../Link/Link'
import { Link } from '../Link/Link'

/**
 * @public
 */
export type BlockLinkProps = LinkProps

/**
 * @public
 */
const StyledBlockLink = styled(Link)<BlockLinkProps>`
  display: block;
  color: inherit;
  text-decoration: none;
`

/**
 * A block-level link that makes its entire container clickable.
 *
 * Extends `Link` with `display: block` and inherits parent text color. Wrap around
 * cards, images, or any content to make the whole area an accessible link target.
 * Removes default link underline styling.
 *
 * @public
 */
export const BlockLink = React.forwardRef<HTMLAnchorElement, BlockLinkProps>((props, ref) => (
  <StyledBlockLink ref={ref} {...props} />
))
BlockLink.displayName = 'BlockLink'
