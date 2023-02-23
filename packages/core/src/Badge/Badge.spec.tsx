import React from 'react'
import { Badge, theme } from '..'

describe('Badge', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders', () => {
    const json = rendererCreateWithTheme(<Badge />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders small', () => {
    const json = rendererCreateWithTheme(<Badge size='small' />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('bg green sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='green' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg lightGreen sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='lightGreen' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGreen)
    expect(json).toHaveStyleRule('color', theme.colors.darkGreen)
  })

  test('bg red sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='red' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg lightRed sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='lightRed' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightRed)
    expect(json).toHaveStyleRule('color', theme.colors.darkRed)
  })

  test('bg orange sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='orange' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange)
    expect(json).toHaveStyleRule('color', theme.colors.text)
  })

  test('bg blue sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='blue' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg lightBlue sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='lightBlue' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.darkBlue)
  })

  test('non-preset: bg text sets background-color and color white sets color', () => {
    const json = rendererCreateWithTheme(<Badge bg='text' color='white' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.text)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('can escape preset: bg lightBlue sets background-color and color text sets color', () => {
    const json = rendererCreateWithTheme(<Badge bg='lightBlue' color='text' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.text)
  })

  test.each([
    { badgeStyle: 'primary', backgroundColor: theme.colors.blue, color: theme.colors.lightestText },
    { badgeStyle: 'primaryLight', backgroundColor: theme.colors.lightBlue, color: theme.colors.blue },
    { badgeStyle: 'primaryDark', backgroundColor: theme.colors.darkBlue, color: theme.colors.lightestText },
    { badgeStyle: 'primaryDarkLight', backgroundColor: theme.colors.lightBlue, color: theme.colors.darkBlue },
    { badgeStyle: 'secondary', backgroundColor: theme.colors.green, color: theme.colors.lightestText },
    { badgeStyle: 'secondaryLight', backgroundColor: theme.colors.lightGreen, color: theme.colors.green },
    {
      badgeStyle: 'backgroundDarkest',
      backgroundColor: theme.colors.darkestBackground,
      color: theme.colors.lightestText,
    },
    {
      badgeStyle: 'backgroundLightest',
      backgroundColor: theme.colors.lightestBackground,
      color: theme.colors.text,
    },
    { badgeStyle: 'neutral', backgroundColor: theme.colors.darkBackground, color: theme.colors.lightestText },
    {
      badgeStyle: 'neutralLight',
      backgroundColor: theme.colors.background,
      color: theme.colors.lightText,
    },
    {
      badgeStyle: 'warning',
      backgroundColor: theme.colors.red,
      color: theme.colors.lightestText,
    },
    {
      badgeStyle: 'warningLight',
      backgroundColor: theme.colors.lightRed,
      color: theme.colors.red,
    },
    {
      badgeStyle: 'highlight',
      backgroundColor: theme.colors.lightHighlight,
      color: theme.colors.shadeHighlight,
    },
    {
      badgeStyle: 'notify',
      backgroundColor: theme.colors.lightYellow,
      color: theme.colors.text,
    },
    {
      badgeStyle: 'success',
      backgroundColor: theme.colors.green,
      color: theme.colors.lightestText,
    },
    {
      badgeStyle: 'successLight',
      backgroundColor: theme.colors.lightGreen,
      color: theme.colors.green,
    },
  ])(
    'badgeStyle $badgeStyle sets background-color to $backgroundColor and color to $color',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ({ badgeStyle, backgroundColor, color }: { badgeStyle: any; backgroundColor: string; color: string }) => {
      const json = rendererCreateWithTheme(<Badge badgeStyle={badgeStyle} />).toJSON()
      expect(json).toMatchSnapshot()
      expect(json).toHaveStyleRule('background-color', backgroundColor)
      expect(json).toHaveStyleRule('color', color)
    }
  )
})
