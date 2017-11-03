import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import styled from 'styled-components'
import { Box, Flex, Text, InputField, Input } from '../src'

storiesOf('InputField', module)
  .add(
    'InputField component',
    withInfo({
      inline: true,
      text:
        'This component renders an input element with a built-in label and optional icon. It makes use of the Input and Label components.'
    })(() => (
      <Box width={500} pr={3}>
        <Text bold pt={4} pb={2}>
          Hey, ya turkey! Enter a word that has 5 characters in it.
        </Text>
        <InputController>
          <InputField
            icon="amenityPool"
            label="A 5 Letter Word"
            id="form-field-3"
            placeholder="e.g. Berry"
          />
        </InputController>
      </Box>
    ))
  )
  .add(
    'Sample States',
    withInfo('Renders a styled Input element')(() => (
      <div>
        <Flex width={900}>
          <Box width={1 / 2} pr={3}>
            <Text bold pt={4} pb={2}>
              Credit Card
            </Text>
            <InputField
              icon="locked"
              label="Card number"
              id="form-field-3"
              placeholder="0000 0000 0000 0000"
            />
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Credit Card Number
            </Text>
            <InputField
              icon="locked"
              id="form-field-4"
              label="Card number"
              placeholder="0000 0000 0000 0000"
              defaultValue="4193 8827 0316 3529"
            />
          </Box>
        </Flex>

        <Flex width={900}>
          <Box width={1 / 2} pr={3}>
            <Text bold pt={4} pb={2}>
              Unfocused Field
            </Text>
            <InputField
              id="form-field-1"
              label="First name"
              defaultValue="Oliver"
              placeholder="e.g. Oliver"
            />
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Focused Field or Passed Blue
            </Text>
            <InputField
              id="form-field-2"
              label="Last name"
              defaultValue="Dumoulin"
              placeholder="e.g. Dumoulin"
              color="blue"
            />
          </Box>
        </Flex>

        <Flex width={900}>
          <Box width={1 / 2} pr={3}>
            <Text bold pt={4} pb={2}>
              Validation Error
            </Text>
            <InputField
              icon="circleInfo"
              color="red"
              info="Please enter a valid email address"
              label="Email Address"
              defaultValue="oliver.dumoulin@priceline.c"
              id="form-field-3"
              placeholder="example@test.com"
            />
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Validation Success
            </Text>
            <InputField
              icon="checkLight"
              color="darkGreen"
              label="Email Address"
              defaultValue="oliver.dumoulin@priceline.com"
              id="form-field-3"
              placeholder="example@test.com"
            />
          </Box>
        </Flex>
      </div>
    ))
  )

class InputController extends React.PureComponent {
  state = {
    value: '',
    isValid: false,
    isDirty: false
  }

  onChange = event => {
    const value = event.target.value
    const isValid = value.length === 5
    this.setState({
      isDirty: true,
      value: value,
      isValid: isValid
    })
  }

  getBorderColor = () => {
    const { isValid, isDirty } = this.state
    if (isValid && isDirty) {
      return 'darkGreen'
    } else if (!isValid && isDirty) {
      return 'red'
    }
  }

  render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      onChange: this.onChange,
      color: this.getBorderColor(),
      info:
        !this.state.isValid && this.state.isDirty
          ? "That's not 5 letters!"
          : null,
      ...this.state
    })
  }
}
