import styled from 'styled-components'
import Link from './Link'
import { mapProps } from './utils'
import getSCMigrationRef from './helpers/getSCMigrationRef'

const BlockLink = mapProps(({ dsRef, ...props }) => ({
  [getSCMigrationRef()]: dsRef,
  ...props
}))(styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`)

BlockLink.displayName = 'BlockLink'

export default BlockLink
