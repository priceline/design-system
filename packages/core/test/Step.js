import React from 'react'
import Step from '../src/Step'

describe('Breadcrumb', () => {
  test('renders without crashing', () => {
    const json = rendererCreateWithTheme(<Step>Breadcrumb</Step>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders as current', () => {
    const component = <Step isCurrent>Breadcrumb</Step>
    const json = rendererCreateWithTheme(component).toJSON()

    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('cursor', 'default')

    expect(hasIcon(component)).toBeFalsy()
  })

  test('renders as completed', () => {
    const component = <Step isCompleted>Breadcrumb</Step>
    const json = rendererCreateWithTheme(component).toJSON()

    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('cursor', 'default')

    expect(hasIcon(component)).toBeTruthy()
  })

  test('renders as current and completed', () => {
    const component = (
      <Step isCurrent isCompleted>
        Breadcrumb
      </Step>
    )
    const json = rendererCreateWithTheme(component).toJSON()

    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('cursor', 'default')

    expect(hasIcon(component)).toBeTruthy()
  })

  test('renders with on click', () => {
    const component = <Step onClick={() => {}}>Breadcrumb</Step>
    const json = rendererCreateWithTheme(component).toJSON()

    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('cursor', 'pointer')

    expect(hasIcon(component)).toBeFalsy()
  })
})

const hasIcon = component => {
  const { container } = renderWithTheme(component)
  return container.querySelector('svg')
}
