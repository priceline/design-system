import React from 'react'
import { render } from '../__test__/testing-library'

import { Container } from '..'

describe('Container', () => {
  test('renders with default theme max-width', () => {
    const json = rendererCreateWithTheme(<Container />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with maxWidth', () => {
    const json = rendererCreateWithTheme(<Container maxWidth={1024} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with size', () => {
    const { getByTestId } = render(<Container size='md' data-testid='container' />)

    expect(getByTestId('container')).toHaveStyleRule('max-width', '768px')
  })
})
