import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Button, theme } from '..'

describe('Button', () => {
  test('renders', () => {
    const json = renderer.create(<Button />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders a button with text', () => {
    const json = renderer.create(<Button>Hello</Button>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('small prop sets height and font-size', () => {
    const json = renderer.create(<Button small />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('height', '32px')
    expect(json).toHaveStyleRule('font-size', '12px')
  })

  test('medium prop sets height and font-size', () => {
    const json = renderer.create(<Button medium />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('height', '40px')
    expect(json).toHaveStyleRule('font-size', '14px')
  })

  test('large prop sets height and font-size', () => {
    const json = renderer.create(<Button large />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('height', '48px')
    expect(json).toHaveStyleRule('font-size', '16px')
  })

  test('fullWidth prop sets width to 100%', () => {
    const json = renderer.create(<Button fullWidth />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '100%')
  })

  test('primary prop sets button to primary', () => {
    const json = renderer.create(<Button primary />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
    expect(json).toHaveStyleRule('border', '0')
  })

  test('secondary prop sets button to secondary', () => {
    const json = renderer.create(<Button secondary />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
    expect(json).toHaveStyleRule('color', theme.colors.white)
    expect(json).toHaveStyleRule('border', '0')
  })

  test('error prop sets button to error', () => {
    const json = renderer.create(<Button error />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
    expect(json).toHaveStyleRule('color', theme.colors.white)
    expect(json).toHaveStyleRule('border', '0')
  })

  test('outline prop sets button to outline', () => {
    const json = renderer.create(<Button outline />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.white)
    expect(json).toHaveStyleRule('color', theme.colors.blue)
    expect(json).toHaveStyleRule('border', `2px solid ${theme.colors.blue}`)
  })

  test('outline prop sets button to outline', () => {
    const json = renderer.create(<Button outline secondary />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.white)
    expect(json).toHaveStyleRule('color', theme.colors.green)
    expect(json).toHaveStyleRule('border', `2px solid ${theme.colors.green}`)
  })

  test('bg prop sets button color to custom color', () => {
    const json = renderer.create(<Button bg='#8b00a5' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', '#8b00a5')
  })

  test('radius prop sets a custom button radius', () => {
    const json = renderer.create(<Button radius='5px' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-radius', '5px')
  })

  test('icon prop sets a button with an icon', () => {
    const json = renderer.create(<Button icon='hotel' />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
