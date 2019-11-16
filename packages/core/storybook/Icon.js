import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Flex, Icon, Truncate } from '../src'
import * as icons from 'pcln-icons'

const keys = Object.keys(icons)

storiesOf('Icon', module)
  .add('Icons', () => (
    <Box p={2} color="primary">
      <Flex wrap>
        {keys.map(name => (
          <Box key={name} width={[1 / 3, 1 / 5, 1 / 6, 1 / 8]} mx={2} my={3}>
            <Icon name={name} size={48} />
            <Truncate fontSize={0}>{name}</Truncate>
          </Box>
        ))}
      </Flex>
    </Box>
  ))
  .add('Color', () => (
    <div>
      <Icon color="primary" size={48} m={2} name="Flights" />
      <Icon color="secondary" size={48} m={2} name="Hotels" />
      <Icon color="alert" size={48} m={2} name="Cars" />
    </div>
  ))
  .add('Responsive', () => (
    <Icon color="primary" size={[100, 200, 300, 50]} name="Flights" />
  ))
