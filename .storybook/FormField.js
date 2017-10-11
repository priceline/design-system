import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Box, FormField, theme, Flex } from '../src'


class InputController extends React.PureComponent {
  state = {
    value: '',
    isValid: false,
    isDirty: false,
    isFocused: false
  }

  onChange = (event) => {
    const value = event.target.value
    const isValid = value.length === 5
    this.setState({
      isDirty: true,
      value: value,
      isValid: isValid
    })
  }

  onBlur = () => {
    this.setState({
      isFocused: false
    })
  }

  onFocus = () => {
    this.setState({
      isFocused: true
    })
  }

  getBorderColor = () => {
    const { isValid, isFocused, isDirty } = this.state
    if (isValid && isDirty) {
      return theme.colors.darkGreen
    } else if (isFocused) {
      return theme.colors.blue
    } else if (!isValid && isDirty) {
      return theme.colors.red
    }
  }

  isThickBorder = () => (this.state.isFocused || this.state.isDirty)

  render () {
    return (
      React.cloneElement(React.Children.only(this.props.children), {
        onChange: this.onChange,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        onClick: this.onClick,
        borderColor: this.getBorderColor(),
        thickBorder: this.isThickBorder(),
        ...this.state
      })
    )
  }
}

storiesOf('FormField', module)
  .add('FormField', () => (
    <div>
      <Flex width={900}>
        <Box width={1 / 2} pr={3}>
          <h5>Placeholder</h5>
          <FormField
            id='form-field-1'
            placeholder='Placeholder text'
          />
        </Box>
        <Box width={1 / 2} pl={3}>
          <h5>Text entered</h5>
          <FormField
            id='form-field-2'
            value='Text entered'
          />
        </Box>
      </Flex>

      <Flex width={900}>
        <Box width={1 / 2} pr={3}>
          <h5>Credit Card</h5>
          <FormField
            icon='locked'
            id='form-field-3'
            placeholder='0000 0000 0000 0000'
          />
        </Box>
        <Box width={1 / 2} pl={3}>
          <h5>Credit Card Number</h5>
          <FormField
            icon='locked'
            id='form-field-4'
            label='Card number'
            placeholder='4193 8827 0316 3529'
          />
        </Box>
      </Flex>

      <Flex width={900}>
        <Box width={1 / 2} pr={3}>
          <h5>First Name</h5>
          <FormField
            value='Oliver'
            id='form-field-5'
            label='First name'
          />
        </Box>
        <Box width={1 / 2} pl={3}>
          <h5>Last name</h5>
          <FormField
            value='Dumoulin'
            id='form-field-6'
            label='Last name'
            borderColor={theme.colors.blue}
            thickBorder
          />
        </Box>
      </Flex>

      <Flex width={900}>
        <Box width={1 / 2} pr={3}>
          <h5>Invalid Email Address</h5>
          <FormField
            value='oliver.dumoulin@priceline.c'
            id='form-field-7'
            label='Email Address'
            labelColor={theme.colors.red}
            borderColor={theme.colors.red}
            thickBorder
            error='Please enter a valid email address'
            errorColor={theme.colors.red}
            icon='circleInfo'
            iconColor={theme.colors.red}
          />
        </Box>
        <Box width={1 / 2} pl={3}>
          <h5>Valid Email Address</h5>
          <FormField
            id='form-field-8'
            value='oliver.dumoulin@priceline.com'
            label='Email Address'
            borderColor={theme.colors.darkGreen}
            thickBorder
            icon='check'
            iconColor={theme.colors.darkGreen}
          />
        </Box>
      </Flex>

      <Flex width={900}>
        <Box width={1 / 2} pr={3}>
          <h5>Poor Password</h5>
          <FormField
            type='password'
            id='form-field-9'
            value='password'
            accessibleLabel='Password'
            label='Poor'
            labelColor={theme.colors.red}
            borderColor={theme.colors.red}
            iconRenderer={poorIconRenderer}
            thickBorder
          />
        </Box>
        <Box width={1 / 2} pl={3}>
          <h5>Weak Password</h5>
          <FormField
            id='form-field-10'
            type='password'
            value='password'
            accessibleLabel='Password'
            label='Weak'
            labelColor={theme.colors.orange}
            borderColor={theme.colors.orange}
            iconRenderer={weakIconRenderer}
            thickBorder
          />
        </Box>
      </Flex>

      <Flex width={900}>
        <Box width={1 / 2} pr={3}>
          <h5>Good Password</h5>
          <FormField
            type='password'
            id='form-field-11'
            value='password'
            accessibleLabel='Password'
            label='Good'
            labelColor={theme.colors.blue}
            borderColor={theme.colors.blue}
            iconRenderer={goodIconRenderer}
            thickBorder
          />
        </Box>
        <Box width={1 / 2} pl={3}>
          <h5>Strong Password</h5>
          <FormField
            id='form-field-12'
            type='password'
            value='password'
            label='Strong'
            accessibleLabel='Password'
            labelColor={theme.colors.darkGreen}
            borderColor={theme.colors.darkGreen}
            iconRenderer={strongIconRenderer}
            thickBorder
          />
        </Box>
      </Flex>
    </div>
  ))


const ColoredMarkContainer = styled.div`
  width: 36px;
`
const ColoredMark = styled.div`
  background-color: ${props => props.color};
  border-color: ${props => props.color};
  display: inline-block;
  margin-left: 3px;
  border-radius: 2px;
  width: 4px;
  height: 12px;
`

const poorIconRenderer = () =>
  <ColoredMarkContainer>
    <ColoredMark color={theme.colors.red} />
    <ColoredMark color={theme.colors.lightGray} />
    <ColoredMark color={theme.colors.lightGray} />
    <ColoredMark color={theme.colors.lightGray} />
  </ColoredMarkContainer>

const weakIconRenderer = () =>
  <ColoredMarkContainer>
    <ColoredMark color={theme.colors.orange} />
    <ColoredMark color={theme.colors.orange} />
    <ColoredMark color={theme.colors.lightGray} />
    <ColoredMark color={theme.colors.lightGray} />
  </ColoredMarkContainer>

const goodIconRenderer = () =>
  <ColoredMarkContainer>
    <ColoredMark color={theme.colors.blue} />
    <ColoredMark color={theme.colors.blue} />
    <ColoredMark color={theme.colors.blue} />
    <ColoredMark color={theme.colors.lightGray} />
  </ColoredMarkContainer>

const strongIconRenderer = () =>
  <ColoredMarkContainer>
    <ColoredMark color={theme.colors.darkGreen} />
    <ColoredMark color={theme.colors.darkGreen} />
    <ColoredMark color={theme.colors.darkGreen} />
    <ColoredMark color={theme.colors.darkGreen} />
  </ColoredMarkContainer>