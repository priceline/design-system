import { Loyalty as LoyaltyIcon } from 'pcln-icons'
import React from 'react'
import { Box } from '../Box/Box'
import { Card } from '../Card/Card'
import { Flex } from '../Flex/Flex'
import { Text } from '../Text/Text'
import { Flag } from './Flag'

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

export const CompensatingFor1PxBorder = () => (
  <Box p={3}>
    <Card pb={3}>
      <Flag width={192} ml={-9} mt={2}>
        <b>Hello</b>
      </Flag>
    </Card>
  </Box>
)

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
