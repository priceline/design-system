import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Popover,
  Button,
  IconButton,
  CloseButton,
  InputField,
  Label,
  Input,
  Card,
  Flex,
  Box,
  Heading,
  Text,
  Hide
} from '../src'

const withState = C =>
  class extends React.Component {
    constructor(props) {
      super()
      this.state = props
      this.update = (...args) => this.setState(...args)
    }
    render() {
      return <C {...this.state} update={this.update} />
    }
  }

const toggle = key => state => ({ [key]: !state[key] })
const sum = n => state => ({ count: state.count + n })
const inc = sum(1)
const dec = sum(-1)

const Stateful = withState(props => (
  <Box px={3} py={6}>
    <Popover
      open={props.open}
      onDismiss={e => {
        props.update(toggle('open'))
      }}
    >
      <Flex p={[2, 2, 0]} align="center">
        <Box width={1}>
          <InputField
            onChange={e => {
              // why?
              const val = e.target.value
              const n = val === '' ? '' : parseInt(val)
              props.update({ count: n })
            }}
            onClick={e => {
              props.update({ open: true })
            }}
          >
            <Label>Popover demo</Label>
            <Input
              type="number"
              aria-haspopup="true"
              placeholder="Popover demo"
              value={props.count || ''}
              onFocus={e => {
                props.update({ open: true })
              }}
              onKeyDown={e => {
                if (e.key === 'Escape') props.update({ open: false })
              }}
              onChange={e => {
                const val = e.target.value
                const n = val === '' ? '' : parseInt(val)
                props.update({ count: n })
              }}
            />
          </InputField>
        </Box>
        {props.open && (
          <Hide mx={2} md lg xl>
            <CloseButton
              title="Close"
              onClick={e => {
                props.update({ open: false })
              }}
            />
          </Hide>
        )}
      </Flex>
      {props.open && (
        <Popover.Body width={[1, 1, 320]}>
          <Heading mb={3}>Stateful Popover Example</Heading>
          <Flex>
            <Text mr="auto">How many?</Text>
            <IconButton
              name="minus"
              title="Decrement"
              onClick={e => props.update(dec)}
            />
            <IconButton
              name="plus"
              title="Increment"
              onClick={e => props.update(inc)}
            />
          </Flex>
        </Popover.Body>
      )}
    </Popover>
    <Box p={2}>
      <Text>Some text under the Popover</Text>
    </Box>
  </Box>
))

storiesOf('Popover', module)
  .add('stateful', () => <Stateful count={0} open={false} />)
  .add('open', () => (
    <Box>
      <Popover open={true}>
        <Button m={[2, 2, 0]}>Button</Button>
        <Popover.Body>Popover.Body</Popover.Body>
      </Popover>
      <Box py={3}>
        <Text>This should be covered by the Popover</Text>
      </Box>
    </Box>
  ))
  .add('offset top', () => (
    <Box>
      <Popover top="128px" open={true}>
        <Button m={[2, 2, 0]}>Button</Button>
        <Popover.Body>
          <Heading>Popover.Body</Heading>
          <Text>
            This Popover has a top value on small viewports to compensate for
            other fixed positioned elements
          </Text>
        </Popover.Body>
      </Popover>
    </Box>
  ))
  .add('competing z-index', () => (
    <Box>
      <Popover open={true}>
        <Button m={[2, 2, 0]}>Button</Button>
        <Popover.Body>
          <Heading>Popover.Body</Heading>
          <Text>
            This Popover has a top value on small viewports to compensate for
            other fixed positioned elements
          </Text>
        </Popover.Body>
      </Popover>
      <div
        style={{
          // controls the offensive z-index value
          position: 'relative',
          zIndex: 1
        }}
      >
        <Box
          my={2}
          p={3}
          color="white"
          bg="red"
          style={{
            position: 'relative',
            zIndex: 2000
          }}
        >
          This element has an unnecessarily high z-index of 2000
        </Box>
      </div>
    </Box>
  ))
