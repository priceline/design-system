import React from 'react'

import { Flex } from '..'

describe('Flex', () => {
  test('renders', () => {
    const flex = rendererCreateWithTheme(<Flex />).toJSON()
    expect(flex).toMatchSnapshot()
  })

  test('alignItems prop', () => {
    const flex = rendererCreateWithTheme(<Flex alignItems='center' />).toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('align-items', 'center')
  })

  test('justifyContent prop', () => {
    const flex = rendererCreateWithTheme(<Flex justifyContent='space-between' />).toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('justify-content', 'space-between')
  })

  test('flexWrap prop', () => {
    const flex = rendererCreateWithTheme(<Flex flexWrap='wrap' />).toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('flex-wrap', 'wrap')
  })

  describe('deprecated prop types', () => {
    let consoleError
    beforeEach(() => {
      consoleError = console.error
      console.error = jest.fn()
    })
    afterEach(() => (console.error = consoleError))

    test('shims the deprecated `align` prop and warns', () => {
      const json = rendererCreateWithTheme(<Flex align='center' />).toJSON()
      expect(json).toHaveStyleRule('align-items', 'center')
      expect(console.error).toHaveBeenCalledWith(
        'Warning: Failed %s type: %s%s',
        'prop',
        'The `align` prop is deprecated and will be removed in a future release. Please use `alignItems` instead.',
        expect.any(String)
      )
    })

    test('shims the deprecated `wrap` prop and warns', () => {
      const json = rendererCreateWithTheme(<Flex wrap />).toJSON()
      expect(json).toHaveStyleRule('flex-wrap', 'wrap')
      expect(console.error).toHaveBeenCalledWith(
        'Warning: Failed %s type: %s%s',
        'prop',
        'The `wrap` prop is deprecated and will be removed in a future release. Please use `flexWrap` instead.',
        expect.any(String)
      )
    })

    test('shims the deprecated `justify` prop and warns', () => {
      const json = rendererCreateWithTheme(<Flex justify='space-between' />).toJSON()
      expect(json).toHaveStyleRule('justify-content', 'space-between')
      expect(console.error).toHaveBeenCalledWith(
        'Warning: Failed %s type: %s%s',
        'prop',
        'The `justify` prop is deprecated and will be removed in a future release. Please use `justifyContent` instead.',
        expect.any(String)
      )
    })
  })
})
