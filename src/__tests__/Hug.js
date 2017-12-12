import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Hug, Text, Card, theme } from '..'

const text = (
  <Text.span>
    Have you seen this <Text.span bold>card</Text.span> I‘m hugging?!
  </Text.span>
)

describe('Hug', () => {
  test('renders with border-radius from theme on top only', () => {
    const json = renderer.create(<Hug />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-top-left-radius', theme.radius)
    expect(json).toHaveStyleRule('border-top-right-radius', theme.radius)
    expect(json).not.toHaveStyleRule('border-bottom-left-radius', theme.radius)
    expect(json).not.toHaveStyleRule('border-bottom-right-radius', theme.radius)
  })

  test('renders text, icon, and Child', () => {
    const json = renderer.create(
      <Hug icon="thumbsUp" text={text}>
        <Card p={3} bg="white" color="text">
          I‘m a card within a hug!
        </Card>
      </Hug>
    ).toJSON
    expect(json).toMatchSnapshot()
  })

  test('renders text when string is provided', () => {
    const json = renderer.create(
      <Hug
        icon="thumbsUp"
        text="I've been known to hug a card from time to time"
      >
        <Card p={3} bg="white" color="text">
          I‘m a card within a hug!
        </Card>
      </Hug>
    ).toJSON
    expect(json).toMatchSnapshot()
  })

  test('renders text when array of nodes is provided', () => {
    const json = renderer.create(
      <Hug icon="thumbsUp" text={[text, text]}>
        <Card p={3} bg="white" color="text">
          I‘m a card within a hug!
        </Card>
      </Hug>
    ).toJSON
    expect(json).toMatchSnapshot()
  })
})
