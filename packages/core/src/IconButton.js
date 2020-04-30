import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'
import { applyVariations, refPropType, getSCMigrationRef } from './utils'

const TransparentButton = styled(Button)`
  padding: 0;
  background-color: transparent;
  color: inherit;

  &:hover {
    background-color: transparent;
    color: inherit;
  }
  & > div {
    display: flex;
  }

  ${applyVariations('IconButton')}
`

const IconButton = ({ icon, ...props }) => {
  // TODO remove once migrated to SC4
  const spreadProps = props
  spreadProps[getSCMigrationRef()] = props.dsRef
  delete spreadProps.dsRef

  return (
    <TransparentButton {...spreadProps}>
      <div>{icon}</div>
    </TransparentButton>
  )
}

IconButton.displayName = 'IconButton'
IconButton.isIconButton = true

IconButton.propTypes = {
  dsRef: refPropType,
  icon: PropTypes.node
}

export default IconButton
