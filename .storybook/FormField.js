import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import {
  Box,
  Flex,
  Text,
  InputField,
  FormField,
  Label,
  Input,
  Icon,
  Select
} from '../src'

storiesOf('FormField', module)
  .add(
    'FormField component',
    withInfo({
      inline: true,
      text:
        'This component renders an input element with a built-in label and optional icon. It makes use of the Input and Label components.'
    })(() => (
      <Box width={500} pr={3}>
        <Text bold pt={4} pb={2}>
          Hey, ya turkey! Enter a word that has 5 characters in it.
        </Text>
        <InputFieldWithController />
      </Box>
    ))
  )
  .add(
    'Sample States',
    withInfo('Renders a styled Input element')(() => (
      <div>
        <Flex width={900}>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Placeholder with Chevron
            </Text>
            <InputField
              onChange={action('onChange event is triggered in FormField')}
            >
              <Input id="form-field-1" placeholder="Placeholder" />
              <Icon name="chevronDown" size="12" />
            </InputField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Placeholder with Icon
            </Text>
            <InputField
              onChange={action('onChange event is triggered in FormField')}
            >
              <Icon name="search" color="blue" size="18" />
              <Input id="form-field-3" placeholder="Placeholder with Icon" />
            </InputField>
          </Box>
        </Flex>
        <Flex width={900}>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Plain Text
            </Text>
            <InputField
              onChange={action('onChange event is triggered in FormField')}
            >
              <Input id="form-field-1" value="Plain text" />
              <Icon name="chevronDown" size="12" />
            </InputField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Plain Text with Icon
            </Text>
            <InputField
              onChange={action('onChange event is triggered in FormField')}
            >
              <Icon name="user" color="blue" />
              <Input id="form-field-1" value="Plain text with Icon" />
              <Icon name="chevronDown" size="12" />
            </InputField>
          </Box>
        </Flex>
        <Flex width={900}>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              With Label and Blue Outline
            </Text>
            <InputField
              color="blue"
              onChange={action('onChange event is triggered in FormField')}
            >
              <Label>Label</Label>
              <Input id="form-field-3" value="Typing Text" />
            </InputField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              With Label, Icon, and Chevron
            </Text>
            <InputField
              color="blue"
              onChange={action('onChange event is triggered in FormField')}
            >
              <Icon name="user" color="blue" />
              <Label>Label</Label>
              <Input id="form-field-3" value="Typing text with Icon" />
              <Icon name="chevronDown" size="12" />
            </InputField>
          </Box>
        </Flex>
        <Flex width={900}>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Email Address with Form Validation
            </Text>
            <InputField
              color="red"
              onChange={action('onChange event is triggered in FormField')}
            >
              <Label>Email address</Label>
              <Input id="form-field-3" value="olvier@examp" />
              <Icon name="warning" color="red" size="20" />
            </InputField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Email Address with Form Validation 2
            </Text>
            <InputField
              color="green"
              onChange={action('onChange event is triggered in FormField')}
            >
              <Label>Email address</Label>
              <Input id="form-field-3" value="olvier@example.com" />
              <Icon name="success" color="green" size="20" />
            </InputField>
          </Box>
        </Flex>
        <Flex width={900}>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              With Label Always Shown
            </Text>
            <InputField
              alwaysShowLabel
              onChange={action('onChange event is triggered in FormField')}
            >
              <Label>Pick-up Location</Label>
              <Input id="form-field-3" placeholder="Same as pick-up" value="" />
            </InputField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Without Label Always Shown (requires typing)
            </Text>
            <InputField
              onChange={action('onChange event is triggered in FormField')}
            >
              <Label>Pick-up Location</Label>
              <Input id="form-field-3" placeholder="Same as pick-up" value="" />
            </InputField>
          </Box>
        </Flex>
        <Flex width={900}>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Label component has hidden prop
            </Text>
            <InputField
              onChange={action('onChange event is triggered in FormField')}
            >
              <Label hidden>Pick-up Location</Label>
              <Input id="form-field-3" placeholder="Same as pick-up" value="" />
            </InputField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Label component without hidden prop
            </Text>
            <InputField
              alwaysShowLabel
              onChange={action('onChange event is triggered in FormField')}
            >
              <Label>Pick-up Location</Label>
              <Input id="form-field-3" placeholder="Same as pick-up" value="" />
            </InputField>
          </Box>
        </Flex>
      </div>
    ))
  )
  .add(
    'State Flow',
    withInfo(
      'This example demonstrates how the input will behave as the user interacts with it step by step'
    )(() => (
      <Flex width={900}>
        <Box width={1 / 3} pl={3}>
          <Text bold pt={4} pb={2}>
            No User Interaction
          </Text>
          <InputField
            onChange={action('onChange event is triggered in FormField')}
          >
            <Label>Drop-off Location</Label>
            <Icon name="search" color="blue" size="18" />
            <Input id="drop-off" placeholder="Enter a drop-off location" />
          </InputField>
        </Box>
        <Box width={1 / 3} pl={3}>
          <Text bold pt={4} pb={2}>
            User Clicks in Box
          </Text>
          <InputField
            onChange={action('onChange event is triggered in FormField')}
          >
            <Label>Drop-off Location</Label>
            <Icon name="search" color="blue" size="18" />
            <Input
              id="drop-off"
              color="blue"
              placeholder="Enter a drop-off location"
            />
          </InputField>
        </Box>
        <Box width={1 / 3} pl={3}>
          <Text bold pt={4} pb={2}>
            User Types a Value
          </Text>
          <InputField
            onChange={action('onChange event is triggered in FormField')}
          >
            <Label>Drop-off Location</Label>
            <Icon name="search" color="blue" size="18" />
            <Input
              id="drop-off"
              color="blue"
              placeholder="Enter a drop-off location"
            />
          </InputField>
        </Box>
      </Flex>
    ))
  )
  .add(
    'FormField composed with Select',
    withInfo(
      'This example demonstrates how the input field will behave with a select dropdown'
    )(() => (
      <Flex width={900}>
        <Box width={1 / 3} pl={3}>
          <Text bold pt={4} pb={2}>
            User Types a Value
          </Text>
          <FormField
            onChange={action('onChange event is triggered in FormField')}
          >
            <Label>Cabin Class</Label>
            <Icon name="key" color="blue" size="18" />
            <Select
              id="cabinClass"
              name="cabinClass"
              defaultValue="Premium Economy"
              prefixIcon="key"
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
              <option>
                With a super long label that doesn't get clobbered by the
                chevron
              </option>
            </Select>
          </FormField>
        </Box>
      </Flex>
    ))
  )
  .add(
    'FormField composed with Select and label',
    withInfo(
      'This example demonstrates how the input field will behave with a select dropdown'
    )(() => (
      <Flex width={900}>
        <Box width={1 / 3} pl={3}>
          <Text bold pt={4} pb={2}>
            User Types a Value
          </Text>
          <FormField
            onChange={action('onChange event is triggered in FormField')}
            alwaysShowLabel
          >
            <Label>Cabin Class</Label>
            <Icon name="key" color="blue" size="18" />
            <Select
              id="cabinClass"
              name="cabinClass"
              defaultValue="Premium Economy"
              prefixIcon="key"
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
              <option>
                With a super long label that doesn't get clobbered by the
                chevron
              </option>
            </Select>
          </FormField>
        </Box>
      </Flex>
    ))
  )

class InputFieldWithController extends React.PureComponent {
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
    return (
      <InputField
        color={this.getBorderColor()}
        info={
          !this.state.isValid && this.state.isDirty
            ? "That's not 5 letters!"
            : null
        }
        isDirty={this.state.isDirty}
        isValid={this.state.isValid}
      >
        <Label>5 Letter Word</Label>
        <Icon name="amenityPool" />
        <Input
          id="form-field"
          value={this.state.value}
          placeholder="Enter a 5 letter word"
          onChange={this.onChange}
        />
        <Icon name="fitness" />
      </InputField>
    )
  }
}
