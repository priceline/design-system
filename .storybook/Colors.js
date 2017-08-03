import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { theme } from '../src'

const keys = Object.keys(theme.colors)
  .filter(key => !Array.isArray(theme.colors[key]))

const next = keys.map(key => ({ key, value: theme.colors[key] }))

const legacy = Object.keys(theme.legacyColors)
  .map(key => ({ key, value: theme.legacyColors[key] }))
  .filter(color => !Array.isArray(color.value))

const Chip = styled.div`
  padding: 48px;
  background-color: ${props => props.color};
`

const Card = props => (
  <div
    style={{
      display: 'inline-block',
      padding: 16,
    }}>
    <Chip color={props.color} />
    <pre>{props.name}</pre>
    <pre>{props.color}</pre>
  </div>
)

const Comparison = ({ keys }) => (
  <div>
    {keys.map(key => (
      <div key={key}
        style={{
          display: 'inline-block',
          padding: 16
        }}>
        <Card name={key} color={theme.colors[key]} />
        <Card name={key} color={theme.legacyColors[key]} />
      </div>
    ))}
  </div>
)

storiesOf('Color', module)
  .add('Comparison', () => (
    <div>
      <Comparison keys={keys} />
      <hr />
      {next.map(color => (
        <Card
          key={color.key}
          name={color.key}
          color={color.value}
        />
      ))}
      <hr />
      {legacy.map(color => (
        <Card
          key={color.key}
          name={color.key}
          color={color.value}
        />
      ))}
    </div>
  ))
  .add('Next palette', () => (
    <div>
      <h1>Next Color Palette</h1>
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
      <h1>Legacy Color Palette</h1>
      {legacy.map(color => (
        <Card
          key={color.key}
          name={color.key}
          color={color.value}
        />
      ))}
    </div>
  ))
