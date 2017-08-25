import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Text, theme } from '..'

describe('Text', () => {
  test('renders', () => {
    const json = renderer.create(<Text />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('align prop sets text-align', () => {
    const json = renderer.create(<Text align='center' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-align', 'center')
  })

  test('bold prop sets font-weight', () => {
    const json = renderer.create(<Text bold theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-weight', theme.bold.toString())
  })

  test('caps prop sets text-transform and letter-spacing', () => {
    const json = renderer.create(<Text caps />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-transform', 'uppercase')
    expect(json).toHaveStyleRule('letter-spacing', '0.2em')
  })

  test('fontSize prop sets font-size', () => {
    const f0 = renderer.create(<Text fontSize={0} />).toJSON()
    const f1 = renderer.create(<Text fontSize={1} />).toJSON()
    const f2 = renderer.create(<Text fontSize={2} />).toJSON()
    const f3 = renderer.create(<Text fontSize={3} />).toJSON()
    const f4 = renderer.create(<Text fontSize={4} />).toJSON()
    const f5 = renderer.create(<Text fontSize={5} />).toJSON()
    const f6 = renderer.create(<Text fontSize={6} />).toJSON()
    expect(f0).toHaveStyleRule('font-size', theme.fontSizes[0] + 'px')
    expect(f1).toHaveStyleRule('font-size', theme.fontSizes[1] + 'px')
    expect(f2).toHaveStyleRule('font-size', theme.fontSizes[2] + 'px')
    expect(f3).toHaveStyleRule('font-size', theme.fontSizes[3] + 'px')
    expect(f4).toHaveStyleRule('font-size', theme.fontSizes[4] + 'px')
    expect(f5).toHaveStyleRule('font-size', theme.fontSizes[5] + 'px')
    expect(f6).toHaveStyleRule('font-size', theme.fontSizes[6] + 'px')
  })

  test('mt prop sets margin-top', () => {
    const json = renderer.create(<Text mt={2} theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin-top', theme.space[2] + 'px')
  })

  test('Test with <Text.h1 /> component', () => {
    const textH1json = renderer.create(<Text.h1 />).toJSON()
    const textH2json = renderer.create(<Text.h2 />).toJSON()
    const textH3json = renderer.create(<Text.h3 />).toJSON()
    const textH4json = renderer.create(<Text.h4 />).toJSON()
    const textH5json = renderer.create(<Text.h5 />).toJSON()
    const textH6json = renderer.create(<Text.h6 />).toJSON()
    expect(textH1json).toMatchSnapshot()
    expect(textH2json).toMatchSnapshot()
    expect(textH3json).toMatchSnapshot()
    expect(textH4json).toMatchSnapshot()
    expect(textH5json).toMatchSnapshot()
    expect(textH6json).toMatchSnapshot()
  })
})
