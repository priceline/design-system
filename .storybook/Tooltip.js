import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tooltip, InputField, Box, Flex } from '../src'
import styled from 'styled-components'

const FlexColumn = styled(Flex)`
  flex-direction: column;
`

storiesOf('Tooltip', module)
  .add('Without Anchors', () => (
    <Box mt={5} width={500}>
      <Tooltip bg="blue" color="white" isVisible top left>
        left tooltip
      </Tooltip>
      <Tooltip bg="black" color="white" isVisible top center>
        centered tooltip
      </Tooltip>
      <Tooltip bg="red" color="white" isVisible top right>
        right tooltip
      </Tooltip>
      <br />
      <Tooltip isVisible bottom left>
        left tooltip
      </Tooltip>
      <Tooltip isVisible bottom center>
        centered tooltip
      </Tooltip>
      <Tooltip isVisible bottom right>
        right tooltip
      </Tooltip>
    </Box>
  ))
  .add('With Anchors', () => (
    <FlexColumn justify={'space-between'} wrap={'wrap'}>
      <Box width={'300px'} p={2} my={2}>
        <Tooltip isVisible top left bg="blue" color="white">
          top left tooltip
        </Tooltip>
        <div>some text</div>
      </Box>
      <Box width={'300px'} p={2} mb={5}>
        <div>some text</div>
        <Tooltip isVisible bottom left bg="red" color="white">
          bottom left tooltip
        </Tooltip>
      </Box>
      <Box width={'300px'} p={2} mb={55}>
        <InputField
          icon="circleInfo"
          color="blue"
          label="Email Address"
          defaultValue="albus.dumbledore@priceline.com"
          id="form-field-3"
          placeholder="example@test.com"
        />
        <Tooltip isVisible bottom left bg="blue" color="white">
          bottom left tooltip
        </Tooltip>
      </Box>
      <Box width={'300px'} p={2} mb={5}>
        <InputField
          icon="circleInfo"
          color="blue"
          label="Email Address"
          defaultValue="albus.dumbledore@priceline.com"
          id="form-field-3"
          placeholder="example@test.com"
        />
        <Tooltip isVisible bottom center bg="blue" color="white">
          bottom center tooltip
        </Tooltip>
      </Box>
      <Box width={'300px'} p={2} mb={'80px'}>
        <InputField
          icon="circleInfo"
          color="red"
          label="Email Address"
          defaultValue="albus.dumbledore@pr"
          id="form-field-3"
          placeholder="example@test.com"
        />
        <Tooltip isVisible bottom right bg="red" color="white">
          Email Address Invalid
        </Tooltip>
      </Box>
      <Box width={'300px'} p={2} mb={5}>
        <Tooltip isVisible top left bg="blue" color="white">
          top left tooltip
        </Tooltip>
        <InputField
          icon="circleInfo"
          color="blue"
          label="Email Address"
          defaultValue="albus.dumbledore@priceline.com"
          id="form-field-3"
          placeholder="example@test.com"
        />
      </Box>
      <Box width={'300px'} p={2} mb={5}>
        <Tooltip isVisible top center bg="blue" color="white">
          top center tooltip
        </Tooltip>
        <InputField
          icon="circleInfo"
          color="blue"
          label="Email Address"
          defaultValue="albus.dumbledore@priceline.com"
          id="form-field-3"
          placeholder="example@test.com"
        />
      </Box>
      <Box width={'300px'} p={2}>
        <Tooltip isVisible top right bg="blue" color="white">
          top right tooltip
        </Tooltip>
        <InputField
          icon="circleInfo"
          color="blue"
          label="Email Address"
          defaultValue="albus.dumbledore@priceline.com"
          id="form-field-3"
          placeholder="example@test.com"
        />
      </Box>
    </FlexColumn>
  ))
