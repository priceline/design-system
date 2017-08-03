import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { theme, legacyTheme } from '../src'

const keys = Object.keys(theme.colors)
  .filter(key => !Array.isArray(theme.colors[key]))

const next = keys.map(key => ({ key, value: theme.colors[key] }))

const legacy = Object.keys(legacyTheme.colors)
  .map(key => ({ key, value: legacyTheme.colors[key] }))
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
          marginRight: 16,
          marginBottom: 16
        }}>
        <Card name={key} color={theme.colors[key]} />
        <Card name={key} color={legacyTheme.colors[key]} />
      </div>
    ))}
  </div>
)

storiesOf('Color', module)
  .add('Old vs. New', () => (
    <div>
      <h1>Old vs. New</h1>
      <Comparison keys={keys} />
    </div>
  ))
  .add('New palette', () => (
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
