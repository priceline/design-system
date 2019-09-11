import React from 'react'
import Step from '../src/Step'

const hasIcon = component => {
  const { container } = renderWithTheme(component)
  return container.querySelector('svg')
}

describe('Step', () => {
  test('renders without crashing', () => {
    const json = rendererCreateWithTheme(<Step>Step</Step>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders active step', () => {
    const component = <Step active>Step</Step>
    const json = rendererCreateWithTheme(component).toJSON()

    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('cursor', 'default')

    expect(hasIcon(component)).toBeFalsy()
  })

  test('renders completed step', () => {
    const component = <Step completed>Step</Step>
    const json = rendererCreateWithTheme(component).toJSON()

    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('cursor', 'default')

    expect(hasIcon(component)).toBeTruthy()
  })

  test('renders as active and completed', () => {
    const component = (
      <Step active completed>
        Step
      </Step>
    )
    const json = rendererCreateWithTheme(component).toJSON()

    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('cursor', 'default')

    expect(hasIcon(component)).toBeTruthy()
  })

  test('renders with on click', () => {
    const component = <Step onClick={() => {}}>Step</Step>
    const json = rendererCreateWithTheme(component).toJSON()

    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('cursor', 'pointer')

    expect(hasIcon(component)).toBeFalsy()
  })
})
