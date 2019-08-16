import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from './theme'
import Icon from './Icon'
import Box from './Box'

class Checkbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,
      checked: props.defaultChecked
    }

    this.checkboxRef = React.createRef()
  }

  onFocus = () => {
    this.setState({ isFocused: true })
  }

  onBlur = () => {
    this.setState({ isFocused: false })
  }

  onChange = () => {
    this.setState({ checked: this.checkboxRef.current.checked })
    this.props.onChange()
  }

  render() {
    const { disabled, size } = this.props
    const { isFocused, checked } = this.state
    return (
      <CheckBoxWrapper
        disabled={disabled}
        focused={isFocused}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        checked={checked}
        data-testid="checkbox-wrapper"
      >
        <StyledInput
          type="checkbox"
          {...this.props}
          onChange={this.onChange}
          innerRef={this.checkboxRef}
          role="checkbox"
          ariaChecked={checked}
        />
        <Icon name="BoxChecked" size={size} data-name="checked" />
        <Icon name="BoxEmpty" size={size} data-name="empty" />
      </CheckBoxWrapper>
    )
  }
}

function getFocusStyles({ theme, focused, checked }) {
  if (focused) {
    if (checked) {
      return `
      border: 1px solid ${theme.colors.blue};
      background-color: ${theme.colors.lightBlue};
      `
    } else {
      return `
      border: 1px solid ${theme.colors.borderGray};
      background-color: ${theme.colors.lightGray};
      `
    }
  } else {
    return `border: 1px solid transparent;`
  }
}

const CheckBoxWrapper = styled(Box)`
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  position: relative;
  vertical-align: middle;
  padding: 2px;
  cursor: pointer;
  color: ${props =>
    props.disabled ? props.theme.colors.borderGray : props.theme.colors.gray};
  
  
  ${getFocusStyles};

  svg[data-name='checked'] {
    display: none;
  }
  
  > input:hover ~ svg[data-name='empty'] {
      color: ${props =>
        props.disabled
          ? props.theme.colors.borderGray
          : props.theme.colors.blue};
          }
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
    
    &:hover ~ svg[data-name='checked'] {
      color: ${props =>
        props.disabled
          ? props.theme.colors.borderGray
          : props.theme.colors.darkBlue};
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
  onChange: PropTypes.func.isRequired
}

Checkbox.defaultProps = {
  size: 20
}

export default Checkbox
