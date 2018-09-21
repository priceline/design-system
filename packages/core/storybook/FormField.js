import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { Box, Flex, Text, FormField, Label, Input, Icon, Select } from '../src'

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
        <FormFieldWithController />
      </Box>
    ))
  )
  .add(
    'Sample States',
    withInfo('Renders a styled Input element')(() => (
      <div>
        <Flex wrap width={900}>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Placeholder with Icon
            </Text>
            <FormField>
              <Icon name="search" color="blue" size="18" />
              <Input id="form-field-3" placeholder="Placeholder with Icon" />
            </FormField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              With Value
            </Text>
            <FormField>
              <Input id="form-field-1" defaultValue="With value" />
            </FormField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              With value and Icon
            </Text>
            <FormField>
              <Icon name="user" color="blue" />
              <Input
                id="form-field-1"
                value="With value and Icon"
                onChange={action('onChange event is triggered in FormField')}
              />
            </FormField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              With Label and Blue Outline
            </Text>
            <FormField color="blue">
              <Label>Label</Label>
              <Input
                id="form-field-3"
                value="Typing Text"
                onChange={action('onChange event is triggered in FormField')}
              />
            </FormField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              With Label and Icon
            </Text>
            <FormField color="blue">
              <Icon name="user" color="blue" />
              <Label>Label</Label>
              <Input
                id="form-field-3"
                value="Typing text with Icon"
                onChange={action('onChange event is triggered in FormField')}
              />
            </FormField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Email Address with Form Validation
            </Text>
            <FormField color="red">
              <Label>Email address</Label>
              <Input
                id="form-field-3"
                value="olvier@examp"
                onChange={action('onChange event is triggered in FormField')}
              />
              <Icon name="warning" color="red" size="20" />
            </FormField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Email Address with Form Validation 2
            </Text>
            <FormField color="green">
              <Label>Email address</Label>
              <Input
                id="form-field-3"
                value="olvier@example.com"
                onChange={action('onChange event is triggered in FormField')}
              />
              <Icon name="success" color="green" size="20" />
            </FormField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              With Label Always Shown
            </Text>
            <FormField alwaysShowLabel>
              <Label>Pick-up Location</Label>
              <Input
                id="form-field-3"
                placeholder="Same as pick-up"
                value=""
                onChange={action('onChange event is triggered in FormField')}
              />
            </FormField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Without Label Always Shown (requires typing)
            </Text>
            <FormField>
              <Label>Pick-up Location</Label>
              <Input
                id="form-field-3"
                placeholder="Same as pick-up"
                value=""
                onChange={action('onChange event is triggered in FormField')}
              />
            </FormField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Label component has hidden prop
            </Text>
            <FormField>
              <Label hidden>Pick-up Location</Label>
              <Input
                id="form-field-3"
                placeholder="Same as pick-up"
                value=""
                onChange={action('onChange event is triggered in FormField')}
              />
            </FormField>
          </Box>
          <Box width={1 / 2} pl={3}>
            <Text bold pt={4} pb={2}>
              Label component without hidden prop
            </Text>
            <FormField alwaysShowLabel>
              <Label>Pick-up Location</Label>
              <Input
                id="form-field-3"
                placeholder="Same as pick-up"
                value=""
                onChange={action('onChange event is triggered in FormField')}
              />
            </FormField>
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
          <FormField>
            <Label>Drop-off Location</Label>
            <Icon name="search" color="blue" size="18" />
            <Input
              id="drop-off"
              placeholder="Enter a drop-off location"
              onChange={action('onChange event is triggered in FormField')}
            />
          </FormField>
        </Box>
        <Box width={1 / 3} pl={3}>
          <Text bold pt={4} pb={2}>
            User Clicks in Box
          </Text>
          <FormField>
            <Label>Drop-off Location</Label>
            <Icon name="search" color="blue" size="18" />
            <Input
              id="drop-off"
              color="blue"
              placeholder="Enter a drop-off location"
              onChange={action('onChange event is triggered in FormField')}
            />
          </FormField>
        </Box>
        <Box width={1 / 3} pl={3}>
          <Text bold pt={4} pb={2}>
            User Types a Value
          </Text>
          <FormField>
            <Label>Drop-off Location</Label>
            <Icon name="search" color="blue" size="18" />
            <Input
              id="drop-off"
              color="blue"
              placeholder="Enter a drop-off location"
              onChange={action('onChange event is triggered in FormField')}
            />
          </FormField>
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
          <FormField>
            <Label>Cabin Class</Label>
            <Icon name="key" color="blue" size="18" />
            <Select
              id="cabinClass"
              name="cabinClass"
              defaultValue="Premium Economy"
              prefixIcon="key"
              onChange={action('onChange event is triggered in FormField')}
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
          <FormField alwaysShowLabel>
            <Label>Cabin Class</Label>
            <Icon name="key" color="blue" size="18" />
            <Select
              id="cabinClass"
              name="cabinClass"
              defaultValue="Premium Economy"
              prefixIcon="key"
              onChange={action('onChange event is triggered in FormField')}
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
  .add('FormField with Select in Flex container', () => (
    <Flex wrap mx={-2} mb={-3}>
      <Box px={2} mb={3} width={[1, 1 / 2]}>
        <FormField>
          <Icon legacy={false} color="blue" name="search" />
          <Label htmlFor="location">Where are you going?</Label>
          <Select id="location" name="location" defaultValue="">
            <option disabled value="">
              Where are you going?
            </option>
            <option>Caribbean</option>
          </Select>
        </FormField>
      </Box>
      <Box px={2} mb={3} width={[1, 1 / 2]}>
        <FormField>
          <Icon legacy={false} color="blue" name="cruises" />
          <Label htmlFor="cruiseLine">Which cruise line?</Label>
          <Select id="cruiseLine" name="cruiseLine" defaultValue="">
            <option disabled value="">
              Which cruise line?
            </option>
            <option>All cruise lines</option>
          </Select>
        </FormField>
      </Box>
    </Flex>
  ))

class FormFieldWithController extends React.Component {
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
      <FormField
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
      </FormField>
    )
  }
}
