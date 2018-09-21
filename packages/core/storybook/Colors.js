import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Flex, Text, theme } from '../src'

const blacklist = ['lightOrange', 'darkPurple']

const keys = Object.keys(theme.colors).filter(key => !blacklist.includes(key))

const next = keys.map(key => ({ key, value: theme.colors[key] }))

const Chip = props => <Box width={1} px={5} py={4} bg={props.color} />

const Pre = Text.withComponent('pre')

const Card = props => (
  <Box>
    <Chip name={props.name} color={props.color} />
    <Text f={0}>{props.name}</Text>
    <Pre m={0}>{props.color}</Pre>
  </Box>
)

storiesOf('Color', module).add('Palette', () => (
  <div>
    <Box p={3}>
      <h1>Color Palette</h1>
    </Box>
    <Flex wrap>
      {next.map(color => (
        <Box key={color.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
          <Card name={color.key} color={color.value} />
        </Box>
      ))}
    </Flex>
  </div>
))
