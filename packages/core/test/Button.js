import React from 'react'
import { Button, createTheme } from '../src'

const theme = createTheme()

describe('Button', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Button />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('size small sets height and font-size', () => {
    const json = rendererCreateWithTheme(<Button size="small" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', '12px')
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('size medium sets height and font-size', () => {
    const json = rendererCreateWithTheme(<Button size="medium" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', '14px')
  })

  test('size large sets height and font-size', () => {
    const json = rendererCreateWithTheme(<Button size="large" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', '16px')
  })

  test('width prop sets width to 100%', () => {
    const json = rendererCreateWithTheme(<Button width={1} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '100%')
  })

  test('disabled prop sets', () => {
    const json = rendererCreateWithTheme(<Button disabled />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', '#e8f2ff')
  })

  test('without disabled prop sets', () => {
    const json = rendererCreateWithTheme(<Button />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.darkBlue, {
      modifier: ':hover'
    })
  })

  test('with title prop', () => {
    const title = 'Hello world'
    const { asFragment, getByTitle } = renderWithTheme(<Button title={title} />)
    expect(asFragment()).toMatchSnapshot()
    expect(getByTitle(title)).toHaveAttribute('aria-label', title)
  })

  describe('variations', () => {
    describe('outline variation', () => {
      test('default render', () => {
        const json = rendererCreateWithTheme(
          <Button variation="outline" disabled={false} />
        ).toJSON()
        expect(json).toMatchSnapshot()
        expect(json).toHaveStyleRule('color', theme.palette.primary.base)
        expect(json).toHaveStyleRule('background-color', 'transparent')
        expect(json).toHaveStyleRule('background-color', 'transparent', {
          modifier: ':hover'
        })
        expect(json).toHaveStyleRule('color', theme.palette.primary.dark, {
          modifier: ':hover'
        })
        expect(json).toHaveStyleRule(
          'box-shadow',
          `inset 0 0 0 2px ${theme.palette.primary.dark}`,
          {
            modifier: ':hover'
          }
        )
      })

      test('disabled', () => {
        const json = rendererCreateWithTheme(
          <Button variation="outline" disabled />
        ).toJSON()
        expect(json).toMatchSnapshot()
        expect(json).toHaveStyleRule('color', theme.palette.primary.light)
        expect(json).toHaveStyleRule('background-color', 'transparent')
      })
    })
  })

  describe('deprecated props', () => {
    test('shims deprecated fullWidth prop', () => {
      const json = rendererCreateWithTheme(<Button fullWidth />).toJSON()
      expect(json).toHaveStyleRule('width', '100%')
    })
  })
})
