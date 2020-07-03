import styled from 'styled-components'

import { Link, LinkProps } from '../Link'
import { mapProps, getSCMigrationRef } from '../utils'

interface BlockLinkProps extends LinkProps {}

export const BlockLink: React.FC<BlockLinkProps> = mapProps(
  ({ dsRef, ...props }) => ({
    [getSCMigrationRef()]: dsRef,
    ...props,
  })
)(styled(Link)<BlockLinkProps>`
  display: block;
  color: inherit;
  text-decoration: none;
`)

BlockLink.displayName = 'BlockLink'

export default BlockLink
