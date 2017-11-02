import React from 'react'
import renderer from 'react-test-renderer'
import { Heading, theme } from '..'

describe('Heading', () => {
  test('renders', () => {
    const json = renderer.create(<Heading />).toJSON()
    expect(json).toMatchSnapshot()
  })

  const dotNotationTestCase = 'Heading component with h1-h6 dot-notation'
  test(dotNotationTestCase, () => {
    const headingH1json = renderer.create(<Heading.h1 />).toJSON()
    const headingH2json = renderer.create(<Heading.h2 />).toJSON()
    const headingH3json = renderer.create(<Heading.h3 />).toJSON()
    const headingH4json = renderer.create(<Heading.h4 />).toJSON()
    const headingH5json = renderer.create(<Heading.h5 />).toJSON()
    const headingH6json = renderer.create(<Heading.h6 />).toJSON()
    expect(headingH1json).toMatchSnapshot()
    expect(headingH2json).toMatchSnapshot()
    expect(headingH3json).toMatchSnapshot()
    expect(headingH4json).toMatchSnapshot()
    expect(headingH5json).toMatchSnapshot()
    expect(headingH6json).toMatchSnapshot()
  })

  const defaultFontSizeTestCase =
    'Heading component with default theme font size, when "fontSize" prop not used'
  test(defaultFontSizeTestCase, () => {
    const json = renderer.create(<Heading />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', theme.fontSizes[4] + 'px')
  })

  const usingTextPropsTestCase =
    'Heading component using <Text> component properties'
  test(usingTextPropsTestCase, () => {
    const json = renderer
      .create(<Heading align="center" color={theme.colors['gray']} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-align', 'center')
    expect(json).toHaveStyleRule('color', theme.colors['gray'])
  })
})
