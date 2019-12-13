import React from 'react'
import { Heading, theme } from '../src'

describe('Heading', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Heading />).toJSON()
    expect(json).toMatchSnapshot()
  })

  const dotNotationTestCase = 'Heading component with h1-h6 dot-notation'
  test(dotNotationTestCase, () => {
    const headingH1json = rendererCreateWithTheme(<Heading.h1 />).toJSON()
    const headingH2json = rendererCreateWithTheme(<Heading.h2 />).toJSON()
    const headingH3json = rendererCreateWithTheme(<Heading.h3 />).toJSON()
    const headingH4json = rendererCreateWithTheme(<Heading.h4 />).toJSON()
    const headingH5json = rendererCreateWithTheme(<Heading.h5 />).toJSON()
    const headingH6json = rendererCreateWithTheme(<Heading.h6 />).toJSON()
    expect(headingH1json).toMatchSnapshot()
    expect(headingH2json).toMatchSnapshot()
    expect(headingH3json).toMatchSnapshot()
    expect(headingH4json).toMatchSnapshot()
    expect(headingH5json).toMatchSnapshot()
    expect(headingH6json).toMatchSnapshot()
  })

  const defaultFontSizeTestCase =
    'Heading component with no default font size, when "fontSize" prop not used'
  test(defaultFontSizeTestCase, () => {
    const json = rendererCreateWithTheme(<Heading />).toJSON()
    expect(json).toMatchSnapshot()
  })

  const usingTextPropsTestCase =
    'Heading component using <Text> component properties'
  test(usingTextPropsTestCase, () => {
    const json = rendererCreateWithTheme(
      <Heading textAlign="center" color="gray" />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-align', 'center')
    expect(json).toHaveStyleRule('color', theme.colors['gray'])
  })
})
