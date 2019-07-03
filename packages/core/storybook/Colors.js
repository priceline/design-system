import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Flex, Text, Button, GreenButton, Link, theme } from '../src'

const blacklist = ['darkPurple']

const keys = Object.keys(theme.colors).filter(key => !blacklist.includes(key))

const next = keys.map(key => ({ key, value: theme.colors[key] }))

const Chip = props => <Box width={1} px={5} py={4} bg={props.color} />

const Pre = Text.withComponent('pre')

const palette = Object.keys(theme.palette).map(key => ({
  key,
  value: theme.palette[key]
}))

const Card = props => (
  <Box>
    <Chip name={props.name} color={props.color} />
    <Text f={0}>{props.name}</Text>
    <Pre m={0}>{props.color}</Pre>
  </Box>
)

storiesOf('Color', module)
  .add('Colors', () => (
    <div>
      <Box p={3}>
        <h1>Colors</h1>
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
  .add('Palette', () => (
    <div>
      <Box p={3}>
        <h1>Palette</h1>
        <p>The palette allows you to change the color of components.</p>
      </Box>
      <h2>Default</h2>
      <Flex wrap>
        {palette.map(pal => (
          <Box key={pal.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
            <Card name={pal.key} color={pal.value} />
          </Box>
        ))}
      </Flex>
      <Box p={3}>
        <h1>Component Styles</h1>
        <p>You can customize the style of components.</p>
      </Box>
      <h2>Default</h2>
      <Flex wrap>
        <Box p={3}>
          <Button>Button Primary</Button>
        </Box>
        <Box p={3}>
          <GreenButton>Button Secondary</GreenButton>
        </Box>
        <Box p={3}>
          <Button variant="default">Button Default</Button>
        </Box>
        <Box p={3}>
          <Button variant="disabled">Button Disabled</Button>
        </Box>
        <Box p={3}>
          <Button variant="negative">Button Negative</Button>
        </Box>
        <Box p={3}>
          <Link>Link Primary</Link>
        </Box>
        <Box p={3}>
          <Link variant="secondary">Link Secondary</Link>
        </Box>
        <Box p={3}>
          <Link variant="title">Link Title</Link>
        </Box>
        <Box p={3}>
          <Link variant="navigation">Link Navigation</Link>
        </Box>
      </Flex>
    </div>
  ))
