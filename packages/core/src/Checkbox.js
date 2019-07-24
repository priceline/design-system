import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from './theme'
import Icon from './Icon'
import Box from './Box'
import { getPaletteColor } from './utils'

const Checkbox = props => {
  const { disabled, size } = props
  return (
    <CheckBoxWrapper color={props.color} disabled={disabled}>
      <StyledInput type="checkbox" {...props} />
      <Icon name="BoxChecked" size={size} data-name="checked" />
      <Icon name="BoxEmpty" size={size} data-name="empty" />
    </CheckBoxWrapper>
  )
}

const CheckBoxWrapper = styled(Box)`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  color: ${props =>
    props.disabled
      ? getPaletteColor('border.base')(props)
      : getPaletteColor('border.light')(props)};

  svg[data-name='checked'] {
    display: none;
  }

  > input:checked {
    & ~ svg[data-name='checked'] {
      display: inline-block;
      color: ${props =>
        props.disabled
          ? getPaletteColor('border.base')(props)
          : getPaletteColor('base')(props)};
    }

    & ~ svg[data-name='empty'] {
      display: none;
    }
  }
`

CheckBoxWrapper.defaultProps = {
  theme
}

const StyledInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
`

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string
}

Checkbox.defaultProps = {
  size: 20,
  color: 'primary'
}

export default Checkbox
