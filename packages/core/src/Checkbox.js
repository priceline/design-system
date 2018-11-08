import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import BoxChecked from 'pcln-icons/lib/BoxChecked'
import BoxEmpty from 'pcln-icons/lib/BoxEmpty'
import theme from './theme'
import Box from './Box'

const Root = styled(Box)`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
`

const Input = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: -1;
`

const Checkbox = ({ checked, disabled, size, ...props }) => {
  const color = disabled ? 'borderGray' : checked ? 'blue' : undefined
  return (
    <Root>
      <Input type="checkbox" checked={checked} disabled={disabled} {...props} />
      {checked ? (
        <BoxChecked color={color} size={size} />
      ) : (
        <BoxEmpty color={color} size={size} />
      )}
    </Root>
  )
}

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

Checkbox.defaultProps = {
  size: 20
}

export default Checkbox
