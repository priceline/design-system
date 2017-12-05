import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Icon, Flex, Box, Label, theme } from '..'

class Checkbox extends React.Component {
  handleClick(e) {
    const { name, value, onClick } = this.props
    const checked = e.target.checked
    onClick(name, value, checked)
  }

  render() {
    const {
      name,
      id,
      disabled,
      size,
      fontSize,
      children,
      onClick,
      checked,
      defaultChecked,
      theme: themeProp,
      ...restProps
    } = this.props
    const currentTheme = themeProp || theme
    return (
      <StyledLabel
        htmlFor={name}
        data-test="design-system-checkbox"
        disabled={disabled}
      >
        <input
          type="checkbox"
          name={name}
          id={this.props.id || name}
          disabled={disabled}
          defaultChecked={checked || defaultChecked}
          {...restProps}
          onChange={e => this.handleClick(e)}
          style={{ opacity: 0, zIndex: -1, position: 'absolute' }}
        />
        <StyledCheckbox
          data-test="checkbox-facade"
          disabled={disabled}
          size={size}
        >
          <Icon
            name="check"
            size={size - 4}
            color={currentTheme.colors.white}
          />
        </StyledCheckbox>
        {children}
      </StyledLabel>
    )
  }
}

const droppedOpacity = css`
  opacity: 0.7;
`
const StyledLabel = Label.extend`
  display: inline-flex;
  align-items: center;
  ${props => (props.disabled ? droppedOpacity : 'cursor: pointer;')};

  input:not(:checked) + [data-test='checkbox-facade'] {
    background-color: ${props => props.theme.colors.white};
    ${props => (props.disabled ? droppedOpacity : null)} &:hover {
      ${props =>
        props.disabled
          ? null
          : 'border-color:' + props.theme.colors.blue + ';'};
    }
  }

  input:checked + [data-test='checkbox-facade'] {
    background-color: ${props =>
      props.disabled ? props.theme.colors.borderGray : props.theme.colors.blue};
    border-color: ${props =>
      props.disabled ? props.theme.colors.borderGray : props.theme.colors.blue};
  }
`

const StyledCheckbox = Box.extend`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.borderGray};
`

Checkbox.displayName = 'Checkbox'
Checkbox.defaultProps = {
  size: 20,
  disabled: false
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  size: PropTypes.number,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.object
}

export default Checkbox
