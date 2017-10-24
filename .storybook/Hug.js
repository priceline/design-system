import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hug, Card } from '../src'

storiesOf('Hug', module)
  .add('With a card inside', () => (
    <Hug>
      Hi
    </Hug>
  ))