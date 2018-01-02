import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import Icon from './Icon'
import Text from './Text'
import Input from './Input'

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool
}

const Radio = props => {
  const { checked, disabled } = props

  const radioIconName = checked ? 'radioChecked' : 'radioEmpty'

  const testID = checked ? 'SELECTED' : disabled ? 'DISABLED' : 'NOT_SELECTED'

  return (
    <RadioWrap checked={checked} disabled={disabled}>
      <RadioInput id="radio-input" type="radio" {...props} />
      <RadioIcon name={radioIconName} size={24} />
    </RadioWrap>
  )
}

const RadioWrap = styled.div`
  display: inline-block;
  color: ${props => props.theme.colors.borderGray};
  &:hover {
    ${props =>
      props.checked || props.disabled
        ? null
        : `color: ${props.theme.colors.blue};`};
  }
`

const RadioInput = styled(Input)`
  opacity: 0;
  position: absolute;
  z-index: 0;
  &:focus {
    box-shadow: none;
  }
  &:checked ~ svg {
    color: ${props => props.theme.colors.blue};
  }
  &:disabled ~ svg {
    color: ${props => props.theme.colors.borderGray};
  }
`

const RadioIcon = styled(Icon)`
  vertical-align: middle;
`

Radio.propTypes = propTypes

export default Radio
