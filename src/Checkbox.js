import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import theme from './theme'
import { Icon, Box } from '..'

const Checkbox = props => {
  const { disabled, size } = props
  return (
    <CheckBoxWrapper disabled={disabled}>
      <StyledInput type="checkbox" {...props} />
      <Icon name="boxChecked" size={size} data-name="checked" />
      <Icon name="boxEmpty" size={size} data-name="empty" />
    </CheckBoxWrapper>
  )
}

const CheckBoxWrapper = Box.extend`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  color: ${props =>
    props.disabled ? props.theme.colors.borderGray : props.theme.colors.gray};

  svg[data-name='checked'] {
    display: none;
  }

  > input:checked {
    & ~ svg[data-name='checked'] {
      display: inline-block;
      color: ${props =>
        props.disabled
          ? props.theme.colors.borderGray
          : props.theme.colors.blue};
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
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.object
}

Checkbox.defaultProps = {
  size: 20,
  disabled: false,
  defaultChecked: false,
  theme: theme
}

export default Checkbox
