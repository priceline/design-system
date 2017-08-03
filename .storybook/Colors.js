import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Box, Text, theme, legacyTheme } from '../src'

const keys = Object.keys(theme.colors)
  .filter(key => !Array.isArray(theme.colors[key]))

const next = keys.map(key => ({ key, value: theme.colors[key] }))

const legacy = Object.keys(legacyTheme.colors)
  .map(key => ({ key, value: legacyTheme.colors[key] }))
  .filter(color => !Array.isArray(color.value))

const Chip = props => <Box width={1} px={5} py={4} bg={props.color} />

const Pre = Text.withComponent('pre')

const InlineBlock = styled(Box)`
  display: inline-block;
`

const Card = props => (
  <InlineBlock p={3}>
    <Chip color={props.color} />
    <Text f={0}>{props.name}</Text>
    <Pre m={0}>{props.color}</Pre>
  </InlineBlock>
)

const Comparison = ({ keys }) => (
  <div>
    {keys.map(key => (
      <InlineBlock
        key={key}
        mr={3}
        mb={3}>
        <Card name={key} color={theme.colors[key]} />
        <Card name={key} color={legacyTheme.colors[key]} />
      </InlineBlock>
    ))}
  </div>
)

storiesOf('Color', module)
  .add('Palette', () => (
    <div>
      <Box p={3}>
        <h1>Color Palette</h1>
      </Box>
      {next.map(color => (
        <Card
          key={color.key}
          name={color.key}
          color={color.value}
        />
      ))}
    </div>
  ))
  .add('Legacy palette', () => (
    <div>
      <Box p={3}>
        <h1>Legacy Color Palette</h1>
      </Box>
      {legacy.map(color => (
        <Card
          key={color.key}
          name={color.key}
          color={color.value}
        />
      ))}
    </div>
  ))
  .add('Old vs. New', () => (
    <div>
      <Box p={3}>
        <h1>Old vs. New</h1>
      </Box>
      <Comparison keys={keys} />
    </div>
  ))
