import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { ThumbsUp } from 'pcln-icons'
import { Hug, Hide, Card, Text } from '..'

const text = (
  <Text.span>
    Today‘s best deal! You save <Text.span bold>$300</Text.span> for your party
    of 2.&nbsp;
  </Text.span>
)

Hide.span = Hide.withComponent('span')

const responsiveText = (
  <Text.span>
    Today‘s best deal! You save <Text.span bold>$300</Text.span>
    <Hide.span xs> for your party of 2</Hide.span>
    .&nbsp;
  </Text.span>
)

export default {
  title: 'Hug',
  component: Hug,
  decorators: [withKnobs],
}

export const WithACardInside = () => (
  <Hug text={text}>
    <Card p={3} bg='white' color='text'>
      I‘m a card within a hug!
    </Card>
  </Hug>
)

WithACardInside.story = {
  name: 'With a card inside',
}

export const WithIconAndACardInside = () => (
  <Hug text={text} color='primary' icon={<ThumbsUp />}>
    <Card p={3} bg='white' color='text'>
      I‘m a card within a hug!
    </Card>
  </Hug>
)

WithIconAndACardInside.story = {
  name: 'With icon and a card inside',
}

export const WithACardInACard = () => (
  <Hug text={text}>
    <Card p={3} bg='white' color='text'>
      <Card p={3} bg='white' color='text'>
        I‘m a card within a card within a hug!
      </Card>
    </Card>
  </Hug>
)

WithACardInACard.story = {
  name: 'With a card in a card',
}

export const WithPlainTextInsteadOfComponent = () => (
  <Hug text="I am plain ol' text">
    <Card p={3} bg='white' color='text'>
      I‘m a card within a hug!
    </Card>
  </Hug>
)

WithPlainTextInsteadOfComponent.story = {
  name: 'With plain text instead of component',
}

export const WithAnArrayOfNodes = () => (
  <Hug text={[text, text]}>
    <Card p={3} bg='white' color='text'>
      I‘m a card within a hug!
    </Card>
  </Hug>
)

WithAnArrayOfNodes.story = {
  name: 'With an array of nodes',
}

export const WithAResponsiveHug = () => (
  <Hug
    text={responsiveText}
    p={2}
    fontSize={[0, 1]}
    icon={<ThumbsUp />}
    iconDisplay={select('Display', {
      Block: 'block',
      None: 'none',
    })}
  >
    <Card p={3} bg='white' color='text'>
      I‘m a card within a hug!
    </Card>
  </Hug>
)

WithAResponsiveHug.story = {
  name: 'With a responsive hug',
}
