import styled from 'styled-components'

import { Link } from '../Link'
import { mapProps, refPropType, getSCMigrationRef } from '../utils'

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
