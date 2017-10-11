import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Box, Flex, Text, theme, legacyTheme } from '../src'

const keys = Object.keys(theme.colors)
  .filter(key => !Array.isArray(theme.colors[key]))

const next = keys.map(key => ({ key, value: theme.colors[key] }))

const legacy = Object.keys(legacyTheme.colors)
  .map(key => ({ key, value: legacyTheme.colors[key] }))
  .filter(color => !Array.isArray(color.value))

const Chip = props => props.color ?
  <Box width={1} px={5} py={4} bg={props.color} />
  : <Box width={1} px={5} py={4}>N/A</Box>

const Pre = Text.withComponent('pre')

const Card = props => (
  <Box>
    <Chip color={props.color} />
    <Text f={0}>{props.name}</Text>
    <Pre m={0}>{props.color}</Pre>
  </Box>
)

const Comparison = ({ keys }) => (
  <Flex wrap>
    {keys.map(key => (
      <Flex
        key={key}
        w={[1, 1/2, null, 1/3, 1/4]}
        p={3}>
        <Box w={1/2}>
          <Card name={key} color={theme.colors[key]} />
        </Box>
        <Box w={1/2}>
          <Card name={key} color={legacyTheme.colors[key]} />
        </Box>
      </Flex>
    ))}
  </Flex>
)

storiesOf('Color', module)
  .add('Palette', () => (
    <div>
      <Box p={3}>
        <h1>Color Palette</h1>
      </Box>
      <Flex wrap>
        {next.map(color => (
          <Box key={color.key} p={3} width={[1, 1/2, 1/3, 1/4, 1/5]}>
            <Card
              name={color.key}
              color={color.value}
            />
          </Box>
        ))}
      </Flex>
    </div>
  ))
  .add('Legacy palette', () => (
    <div>
      <Box p={3}>
        <h1>Legacy Color Palette</h1>
      </Box>
      <Flex wrap>
        {legacy.map(color => (
          <Box key={color.key} p={3} width={[1, 1/2, 1/3, 1/4, 1/5]}>
            <Card
              name={color.key}
              color={color.value}
            />
          </Box>
        ))}
      </Flex>
    </div>
  ))
  .add('New vs. Old', () => (
    <div>
      <Box p={3}>
        <h1>New vs. Old</h1>
      </Box>
      <Comparison keys={keys} />
    </div>
  ))
