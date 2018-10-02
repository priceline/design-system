import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon, Flex, Box, Text } from '../src'
import * as icons from 'pcln-icons'

const keys = Object.keys(icons)

storiesOf('Icon', module)
  .add('Icons', () => (
    <Box p={2} color="white" bg="blue">
      <Flex wrap>
        {keys.map(name => (
          <Box key={name} w={[1 / 3, 1 / 5, 1 / 6, 1 / 8]} mx={2} my={3}>
            <Icon name={name} size={48} />
            <Text fontSize={0}>{name}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  ))
  .add('Color', () => (
    <div>
      <Icon color="blue" size={48} m={2} name="flights" />
      <Icon color="green" size={48} m={2} name="hotels" />
      <Icon color="orange" size={48} m={2} name="cars" />
    </div>
  ))
