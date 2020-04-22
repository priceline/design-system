import styled from 'styled-components'
import Link from './Link'
import { mapProps } from './utils'
import getSCMigrationRef from './utils/getSCMigrationRef'
import refPropType from './utils/refPropType'

const BlockLink = mapProps(({ dsRef, ...props }) => ({
  [getSCMigrationRef()]: dsRef,
  ...props
}))(styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`)

BlockLink.displayName = 'BlockLink'

BlockLink.propTypes = {
  dsRef: refPropType
}

export default BlockLink
