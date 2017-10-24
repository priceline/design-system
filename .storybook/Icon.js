import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon, Flex, Box } from '../src'
import icons from '../icons.json'

const keys = Object.keys(icons)
const oldKeys = ['srollLeft', 'chevronLight', 'chevronThick']

storiesOf('Icon', module)
  .add('Index', () => (
    <Box p={2} color="white" bg="blue">
      <Flex wrap>
        {keys.map(name => (
          <Box key={name} w={[1 / 3, 1 / 5, 1 / 6, 1 / 8]} m={2}>
            <Icon name={name} size={48} />
            <pre>{name}</pre>
          </Box>
        ))}
      </Flex>
    </Box>
  ))
  .add('Color', () => (
    <div>
      <Icon color="blue" size={48} m={2} name="planeOutlineEngine" />
      <Icon color="green" size={48} m={2} name="hotel" />
      <Icon color="orange" size={48} m={2} name="carLine" />
    </div>
  ))
  .add('Legacy icons, will be removed at v1.0.0', () => (
    <Box p={2} color="white" bg="blue">
      <Flex wrap>
        {oldKeys.map(name => (
          <Box key={name} w={[1 / 3, 1 / 5, 1 / 6, 1 / 8]} m={2}>
            <Icon name={name} size={48} />
            <pre>{name}</pre>
          </Box>
        ))}
      </Flex>
    </Box>
  ))
