import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tooltip, InputField, Box, Flex, Banner } from '../src'
import styled from 'styled-components'

const FlexColumn = styled(Flex)`
  flex-direction: column;
`
const loripsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est, qui non oderit libidinosam, protervam adolescentiam? Sed ego in hoc resisto; Ratio enim nostra consentit, pugnat oratio. Nihil enim hoc differt.
`

storiesOf('Tooltip', module)
  .add('Without Anchors', () => (
    <Box mt={5} width={500}>
      <Tooltip bg="blue" color="white" top left>
        left tooltip
      </Tooltip>
      <Tooltip bg="black" color="white" top center>
        centered tooltip
      </Tooltip>
      <Tooltip bg="red" color="white" top right>
        right tooltip
      </Tooltip>
      <br />
      <Tooltip bottom left>
        left tooltip
      </Tooltip>
      <Tooltip bottom center>
        centered tooltip
      </Tooltip>
      <Tooltip bottom right>
        right tooltip
      </Tooltip>
    </Box>
  ))
  .add('With Anchors', () => (
    <FlexColumn justify={'space-between'} wrap={'wrap'}>
      <Box width={'300px'} p={2} my={2}>
        <Tooltip top left bg="blue" color="white">
          top left tooltip
        </Tooltip>
        <div>some text</div>
      </Box>
      <Box width={'300px'} p={2} mb={5}>
        <div>some text</div>
        <Tooltip bottom left bg="red" color="white">
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
        <Tooltip bottom left bg="blue" color="white">
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
        <Tooltip bottom center bg="blue" color="white">
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
        <Tooltip bottom right bg="red" color="white">
          Email Address Invalid
        </Tooltip>
      </Box>
      <Box width={'300px'} p={2} mb={5}>
        <Tooltip top left bg="blue" color="white">
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
        <Tooltip top center bg="blue" color="white">
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
        <Tooltip top right bg="blue" color="white">
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
  .add('With Width', () => (
    <Box>
      <Box width={'600px'} p={2} mt={5} ml={3} mb={'150px'}>
        <Banner text="Very large tooltip (bottom left) " bg={'orange'} p={3} />
        <Tooltip
          bottom
          left
          bg="green"
          color="white"
          width={['200px', '400px']}
        >
          {loripsum}
        </Tooltip>
      </Box>
      <Box width={'600px'} p={2} mt={5} ml={3}>
        <Tooltip
          top
          left
          bg="black"
          color="white"
          width={['200px', '400px', '500px', '600px']}
        >
          {loripsum}
        </Tooltip>
        <Banner text="Very large tooltip (top left)" bg={'orange'} p={3} />
      </Box>

      <Box width={'600px'} p={2} mt={5} ml={3} mb={'150px'}>
        <Banner text="Very large tooltip (bottom right)" bg={'blue'} p={3} />
        <Tooltip
          bottom
          right
          bg="green"
          color="white"
          width={['200px', '400px', '550px']}
        >
          {loripsum}
        </Tooltip>
      </Box>
      <Box width={'600px'} p={2} mt={5} ml={3}>
        <Tooltip
          top
          right
          bg="black"
          color="white"
          width={['200px', '400px', '500px']}
        >
          {loripsum}
        </Tooltip>
        <Banner text="Very large tooltip (top right)" bg={'blue'} p={3} />
      </Box>

      <Box width={'600px'} p={2} mt={5} ml={3} mb={'150px'}>
        <Banner
          text="Very large tooltip (bottom center)"
          bg={'lightGreen'}
          p={3}
        />
        <Tooltip
          bottom
          center
          bg="green"
          color="white"
          width={['200px', '400px', '500px', '510px']}
        >
          {loripsum}
        </Tooltip>
      </Box>
      <Box width={'600px'} p={2} mt={5} ml={3}>
        <Tooltip
          top
          center
          bg="black"
          color="white"
          width={['200px', '400px', '500px', '600px']}
        >
          {loripsum}
        </Tooltip>
        <Banner
          text="Very large tooltip (top center)"
          bg={'lightGreen'}
          p={3}
        />
      </Box>
    </Box>
  ))
