import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'
import { Hug, Text, Card, theme } from '..'

const text = <Text.span>Have you seen this <Text.span bold>card</Text.span> I'm hugging?!</Text.span>

describe('Hug', () => {
  test('renders with border-radius from theme', () => {
    const json = renderer.create(<Hug theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders text, icon, and Child', () => {
    const json = toJson(shallow(
      <Hug icon='closeLight' text={text} theme={theme}>
        <Card p={3} bg='white' color='text'>I'm a card within a hug!</Card>
      </Hug>
    ))
    expect(json).toMatchSnapshot()
  })

  test('renders text when string is provided', () => {
    const json = toJson(shallow(
      <Hug icon='closeLight' text="I've been known to hug a card from time to time" theme={theme}>
        <Card p={3} bg='white' color='text'>I'm a card within a hug!</Card>
      </Hug>
    ))
    expect(json).toMatchSnapshot()
  })

  test('renders text when array of nodes is provided', () => {
    const json = toJson(shallow(
      <Hug icon='closeLight' text={[text, text]} theme={theme}>
        <Card p={3} bg='white' color='text'>I'm a card within a hug!</Card>
      </Hug>
    ))
    expect(json).toMatchSnapshot()
  })
})
