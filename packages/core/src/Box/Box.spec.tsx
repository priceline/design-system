import React from 'react'
import { render, screen } from '../__test__/testing-library'
import { theme } from '../theme/theme'
import { Box } from './Box'

describe('Box', () => {
  test('renders', () => {
    const { asFragment } = render(<Box />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('width and height props set width/height', () => {
    render(<Box width={1 / 2} height='50%' data-testid='box' />)
    const element = screen.getByTestId('box')
    expect(element).toHaveStyleRule('height', '50%')
    expect(element).toHaveStyleRule('width', '50%')
  })

  test('m prop sets margin', () => {
    render(<Box m={2} data-testid='box' />)
    const element = screen.getByTestId('box')
    expect(element).toHaveStyleRule('margin', theme.space[2])
  })

  test('maxHeight, maxWidth, minHeight, minWidth', () => {
    render(<Box maxHeight={250} maxWidth={250} minHeight={55} minWidth={55} data-testid='box' />)
    const element = screen.getByTestId('box')
    expect(element).toHaveStyleRule('max-height', '250px')
    expect(element).toHaveStyleRule('max-width', '250px')
    expect(element).toHaveStyleRule('min-height', '55px')
    expect(element).toHaveStyleRule('min-width', '55px')
  })

  test('p prop sets padding', () => {
    render(<Box p={2} data-testid='box' />)
    const element = screen.getByTestId('box')
    expect(element).toHaveStyleRule('padding', theme.space[2])
  })

  test('color prop sets color', () => {
    render(<Box color='blue' data-testid='box' />)
    const element = screen.getByTestId('box')
    expect(element).toHaveStyleRule('color', theme.colors.blue)
  })

  test('boxShadowSize prop sets box-shadow', () => {
    render(<Box boxShadowSize='sm' data-testid='box' />)
    const element = screen.getByTestId('box')
    expect(element).toHaveStyleRule('box-shadow', theme.shadows.sm)
  })

  test('overflow prop sets overflow', () => {
    const { asFragment, getByTestId } = render(<Box overflow='scroll' data-testid='Box' />)
    expect(asFragment()).toMatchSnapshot()
    expect(getByTestId('Box')).toHaveStyleRule('overflow', 'scroll')
  })
})
