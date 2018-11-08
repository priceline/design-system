import React from 'react'
import styled from 'styled-components'
import RadioChecked from 'pcln-icons/lib/RadioChecked'
import RadioEmpty from 'pcln-icons/lib/RadioEmpty'
import theme from './theme'

const RadioWrap = styled.div`
  display: inline-block;
  color: ${props => props.theme.colors.borderGray};
  &:hover {
    ${props =>
      props.checked || props.disabled
        ? null
        : `color: ${props.theme.colors.blue};`};
  }
  & svg {
    vertical-align: middle;
  }
`

const RadioInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: -1;
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

const Radio = props => {
  const { checked, disabled } = props
  const icon = checked ? <RadioChecked /> : <RadioEmpty />

  return (
    <RadioWrap checked={checked} disabled={disabled}>
      <RadioInput type="radio" {...props} />
      {icon}
    </RadioWrap>
  )
}

Radio.defaultProps = {
  theme: theme
}

export default Radio
