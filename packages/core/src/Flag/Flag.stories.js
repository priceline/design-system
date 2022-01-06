import React from 'react'
import { Box, Card, Flag, Flex, Text } from '..'
import { Loyalty as LoyaltyIcon } from 'pcln-icons'

export default {
  title: 'Flag',
  component: Flag,
}

export const Default = () => (
  <Box p={3}>
    <Card py={0}>
      <Flag mt={2}>Hello Flag</Flag>
      <Box p={3}>Hello</Box>
    </Card>
  </Box>
)

export const Colors = () => (
  <Box p={3}>
    <Card pb={3}>
      <Flag width={192} mt={2} bg='orange'>
        <b>Hello</b> Orange
      </Flag>
      <Flag mt={3} bg='blue'>
        Hello Blue
      </Flag>
      <Flag mt={3} bg='purple'>
        Hello Purple
      </Flag>
    </Card>
  </Box>
)

export const WithCustomHexBgColor = () => (
  <Box p={3}>
    <Card pb={3}>
      <Flag width={192} mt={2} bg='#085397'>
        <b>Hello</b> #085397
      </Flag>
      <Flag width={192} mt={2} bg='#f2633a'>
        <b>Hello</b> #f2633a
      </Flag>
      <Flag width={192} mt={2} bg='#0a84c1'>
        <b>Hello</b> #0a84c1
      </Flag>
      <Flag width={192} mt={2} bg='#3c910e'>
        <b>Hello</b> #3c910e
      </Flag>
    </Card>
  </Box>
)

WithCustomHexBgColor.story = {
  name: 'with custom hex bg color',
}

export const CompensatingFor1PxBorder = () => (
  <Box p={3}>
    <Card pb={3}>
      <Flag width={192} ml={-9} mt={2}>
        <b>Hello</b>
      </Flag>
    </Card>
  </Box>
)

CompensatingFor1PxBorder.story = {
  name: 'Compensating for 1px border',
}

export const WrappedText = () => (
  <Box p={3}>
    <Card pb={3}>
      <Flag mt={2}>
        <b>Hello</b>
        This is a really long string of text that should wrap when it gets too long. But then the flag part to
        the right will probably break.
      </Flag>
    </Card>
  </Box>
)

WrappedText.story = {
  name: 'Wrapped text',
}

export const WithIcon = () => (
  <Box p={3}>
    <Card pb={3}>
      <Flag mt={2}>
        <Flex>
          <LoyaltyIcon size={14} mr={1} />
          <Text>Hello World</Text>
        </Flex>
      </Flag>
    </Card>
  </Box>
)

export const WithCustomPadding = () => (
  <Box p={3}>
    <Card pb={3}>
      <Flag mt={2} py={[1, 2, 3]} pl={[2, 3, 4]} pr={[1, 3, 4]}>
        <Flex>
          <Text>Hello World</Text>
        </Flex>
      </Flag>
    </Card>
  </Box>
)

WithCustomPadding.story = {
  name: 'With custom padding',
}
