import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Flex from './Flex'
import Box from './Box'
import theme from './theme'

class Checkbox extends React.Component {
  constructor({ value, isChecked }) {
    super()
    this.state = {
      value,
      isChecked
    }
  }

  handleClick() {
    const { isDisabled, name, value, checkAction } = this.props
    const { isChecked } = this.state
    if (isDisabled) {
      return
    }

    checkAction(name, value, !isChecked)
    this.setState({ isChecked: !isChecked })
  }

  render() {
    const { name, id, isDisabled, value, size, fontSize } = this.props

    const currentTheme = this.props.theme || theme

    const CurrentComponent = this.state.isChecked
      ? CheckedCheckbox
      : StyledCheckbox
    return (
      <CurrentComponent
        isChecked={this.state.isChecked}
        isDisabled={isDisabled}
        size={size}
        theme={currentTheme}
        data-test="design-system-checkbox"
        onClick={() => this.handleClick()}
      >
        {this.state.isChecked ? (
          <Icon
            name="check"
            size={size - 4}
            color={currentTheme.colors.white}
          />
        ) : null}

        <input
          type="checkbox"
          name={name}
          id={id}
          value={value}
          disabled={isDisabled}
          defaultChecked={this.state.isChecked}
          style={{ display: 'none' }}
        />
      </CurrentComponent>
    )
  }
}

const StyledCheckbox = Box.extend`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.borderGray};
  ${props =>
    props.isDisabled ? 'opacity: 0.5; cursor: initial;' : null} &:hover {
    ${props =>
      props.isDisabled
        ? null
        : 'border-color:' + props.theme.colors.blue + ';'};
  }
`

const CheckedCheckbox = StyledCheckbox.extend`
  background-color: ${props =>
    props.isDisabled ? props.theme.colors.borderGray : props.theme.colors.blue};
  border-color: ${props =>
    props.isDisabled ? props.theme.colors.borderGray : props.theme.colors.blue};
`

Checkbox.displayName = 'Checkbox'
Checkbox.defaultProps = {
  size: 20,
  isDisabled: false
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  size: PropTypes.number,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  value: PropTypes.string,
  checkAction: PropTypes.func.isRequired,
  theme: PropTypes.object
}

export default Checkbox
