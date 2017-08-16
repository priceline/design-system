import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon, Box } from '../src'
import icons from '../icons.json'

const keys = Object.keys(icons)

storiesOf('Icon', module)
  .add('Index', () => (
    <Box
      p={2}
      color='white'
      bg='blue'>
      {keys.map(name => (
        <Box
          key={name}
          m={2}>
          <Icon
            name={name}
            size={48}
          />
          <pre>{name}</pre>
        </Box>
      ))}
    </Box>
  ))
  .add('Color', () => (
    <div>
      <Icon
        color='blue'
        size={48}
        m={2}
        name='planeOutlineEngine'
      />
      <Icon
        color='green'
        size={48}
        m={2}
        name='hotel'
      />
      <Icon
        color='orange'
        size={48}
        m={2}
        name='carLine'
      />
    </div>
  ))
