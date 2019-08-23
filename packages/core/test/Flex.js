import React from 'react'
import { Flex } from '../src'

describe('Flex', () => {
  test('renders', () => {
    const flex = rendererCreateWithTheme(<Flex />).toJSON()
    expect(flex).toMatchSnapshot()
  })

  test('alignItems prop', () => {
    const flex = rendererCreateWithTheme(<Flex alignItems="center" />).toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('align-items', 'center')
  })

  test('justifyContent prop', () => {
    const flex = rendererCreateWithTheme(
      <Flex justifyContent="space-between" />
    ).toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('justify-content', 'space-between')
  })

  test('flexWrap prop', () => {
    const flex = rendererCreateWithTheme(<Flex flexWrap="wrap" />).toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('flex-wrap', 'wrap')
  })

  describe('deprecated prop types', () => {
    test('shims the deprecated align prop', () => {
      const json = rendererCreateWithTheme(<Flex align="center" />).toJSON()
      expect(json).toHaveStyleRule('align-items', 'center')
    })

    test('shims the deprecated wrap prop', () => {
      const json = rendererCreateWithTheme(<Flex wrap />).toJSON()
      expect(json).toHaveStyleRule('flex-wrap', 'wrap')
    })

    test('shims the deprecated justify prop', () => {
      const json = rendererCreateWithTheme(
        <Flex justify="space-between" />
      ).toJSON()
      expect(json).toHaveStyleRule('justify-content', 'space-between')
    })

    test.skip('warns when using deprecated align prop', () => {
      // unsure why this isn't being called
      const spy = jest.spyOn(global.console, 'error')
      rendererCreateWithTheme(<Flex align="center" />)
      expect(spy).toHaveBeenCalled()
    })
  })
})
