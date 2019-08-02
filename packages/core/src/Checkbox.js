import React from 'react'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Box from './Box'
import { getPaletteColor, deprecatedColorValue } from './utils'

const Checkbox = props => {
  const { disabled, size } = props
  return (
    <CheckBoxWrapper
      theme={props.theme}
      color={props.color}
      disabled={disabled}
    >
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
  background-color: inherit;
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
  color: deprecatedColorValue()
}

Checkbox.defaultProps = {
  size: 20,
  color: 'primary'
}

export default withTheme(Checkbox)
