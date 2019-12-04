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
    const spy = jest.spyOn(console, 'error')

    test('shims the deprecated `align` prop and warns', () => {
      const json = rendererCreateWithTheme(<Flex align="center" />).toJSON()
      expect(json).toHaveStyleRule('align-items', 'center')
      expect(spy.mock.calls.length).toBe(1)
      expect(spy).toHaveBeenCalledWith(
        expect.stringContaining(
          'Warning: Failed prop type: The `align` prop is deprecated and will be removed in a future release. Please use `alignItems` instead.'
        )
      )
    })

    test('shims the deprecated `wrap` prop and warns', () => {
      const json = rendererCreateWithTheme(<Flex wrap />).toJSON()
      expect(json).toHaveStyleRule('flex-wrap', 'wrap')
      expect(spy.mock.calls.length).toBe(2)
      expect(spy).toHaveBeenCalledWith(
        expect.stringContaining(
          'Warning: Failed prop type: The `wrap` prop is deprecated and will be removed in a future release. Please use `flexWrap` instead.'
        )
      )
    })

    test('shims the deprecated `justify` prop and warns', () => {
      const json = rendererCreateWithTheme(
        <Flex justify="space-between" />
      ).toJSON()
      expect(json).toHaveStyleRule('justify-content', 'space-between')
      expect(spy.mock.calls.length).toBe(3)
      expect(spy).toHaveBeenCalledWith(
        expect.stringContaining(
          'Warning: Failed prop type: The `justify` prop is deprecated and will be removed in a future release. Please use `justifyContent` instead.'
        )
      )
    })
  })
})
