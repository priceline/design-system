import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hug, Card, Text } from '../src'

const text = (
  <Text.span>
    Today‘s best deal! You save <Text.span bold>$300</Text.span> for your party
    of 2.&nbsp;
  </Text.span>
)

storiesOf('Hug', module)
  .add('With a card inside', () => (
    <Hug text={text}>
      <Card p={3} bg="white" color="text">
        I‘m a card within a hug!
      </Card>
    </Hug>
  ))
  .add('With icon and a card inside', () => (
    <Hug text={text} icon="thumbsUp">
      <Card p={3} bg="white" color="text">
        I‘m a card within a hug!
      </Card>
    </Hug>
  ))
  .add('With an uncropped border', () => (
    <Hug text={text} showChildBorder>
      <Card p={3} bg="white" color="text">
        I‘m a card within a hug!
      </Card>
    </Hug>
  ))
  .add('With plain text instead of component', () => (
    <Hug text="I am plain ol' text">
      <Card p={3} bg="white" color="text">
        I‘m a card within a hug!
      </Card>
    </Hug>
  ))
  .add('With an array of nodes', () => (
    <Hug text={[text, text]}>
      <Card p={3} bg="white" color="text">
        I‘m a card within a hug!
      </Card>
    </Hug>
  ))
