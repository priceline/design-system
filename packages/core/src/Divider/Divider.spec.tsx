import React from 'react'
import { render, screen } from '../__test__/testing-library'
import { Divider, theme } from '..'

describe('Divider', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Divider />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('width prop sets width', () => {
    const json = rendererCreateWithTheme(<Divider width={1 / 2} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '50%')
  })

  test('m prop sets margin', () => {
    const json = rendererCreateWithTheme(<Divider m={2} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin', theme.space[2])
  })

  test('borderColor prop sets borderColor', () => {
    const json = rendererCreateWithTheme(<Divider borderColor='blue' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-color', theme.colors.blue)
  })

  test('override default margin left and right', () => {
    render(<Divider mx={2} data-testid='divider' />)

    expect(screen.getByTestId('divider')).toHaveStyleRule('margin-left', theme.space[2])
    expect(screen.getByTestId('divider')).toHaveStyleRule('margin-right', theme.space[2])
  })
})
