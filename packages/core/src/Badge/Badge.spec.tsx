import React from 'react'
import { render, screen } from '../__test__/testing-library'
import { theme } from '../theme'
import { Badge } from './Badge'

describe('Badge', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders', () => {
    const { asFragment } = render(<Badge />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders small', () => {
    const { asFragment } = render(<Badge size='small' />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('bg green sets background-color and color', () => {
    render(
      <Badge bg='green' data-testid='badge'>
        Badge
      </Badge>
    )
    const element = screen.getByTestId('badge')
    expect(element).toHaveStyleRule('background-color', theme.colors.green)
    expect(element).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg lightGreen sets background-color and color', () => {
    render(
      <Badge bg='lightGreen' data-testid='badge'>
        Badge
      </Badge>
    )
    const element = screen.getByTestId('badge')
    expect(element).toHaveStyleRule('background-color', theme.colors.lightGreen)
    expect(element).toHaveStyleRule('color', theme.colors.darkGreen)
  })

  test('bg red sets background-color and color', () => {
    render(
      <Badge bg='red' data-testid='badge'>
        Badge
      </Badge>
    )
    const element = screen.getByTestId('badge')
    expect(element).toHaveStyleRule('background-color', theme.colors.red)
    expect(element).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg lightRed sets background-color and color', () => {
    render(
      <Badge bg='lightRed' data-testid='badge'>
        Badge
      </Badge>
    )
    const element = screen.getByTestId('badge')
    expect(element).toHaveStyleRule('background-color', theme.colors.lightRed)
    expect(element).toHaveStyleRule('color', theme.colors.darkRed)
  })

  test('bg orange sets background-color and color', () => {
    render(
      <Badge bg='orange' data-testid='badge'>
        Badge
      </Badge>
    )
    const element = screen.getByTestId('badge')
    expect(element).toHaveStyleRule('background-color', theme.colors.orange)
    expect(element).toHaveStyleRule('color', theme.colors.text)
  })

  test('bg blue sets background-color and color', () => {
    render(
      <Badge bg='blue' data-testid='badge'>
        Badge
      </Badge>
    )
    const element = screen.getByTestId('badge')
    expect(element).toHaveStyleRule('background-color', theme.colors.blue)
    expect(element).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg lightBlue sets background-color and color', () => {
    render(
      <Badge bg='lightBlue' data-testid='badge'>
        Badge
      </Badge>
    )
    const element = screen.getByTestId('badge')
    expect(element).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(element).toHaveStyleRule('color', theme.colors.darkBlue)
  })

  test('non-preset: bg text sets background-color and color white sets color', () => {
    render(
      <Badge bg='text' color='white' data-testid='badge'>
        Badge
      </Badge>
    )
    const element = screen.getByTestId('badge')
    expect(element).toHaveStyleRule('background-color', theme.colors.text)
    expect(element).toHaveStyleRule('color', theme.colors.white)
  })

  test('can escape preset: bg lightBlue sets background-color and color text sets color', () => {
    render(
      <Badge bg='lightBlue' color='text' data-testid='badge'>
        Badge
      </Badge>
    )
    const element = screen.getByTestId('badge')
    expect(element).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(element).toHaveStyleRule('color', theme.colors.text)
  })

  test('textTransform', () => {
    render(<Badge textTransform='lowercase'>Lowercase Text</Badge>)
    expect(screen.getByText('Lowercase Text')).toHaveStyleRule('text-transform', 'lowercase')
    expect(screen.getByText('Lowercase Text')).toHaveStyleRule('letter-spacing', 'normal')
  })

  test('size', () => {
    render(<Badge size='captionMedium'>Caption</Badge>)
    expect(screen.getByText('Caption')).toHaveStyleRule('padding-right', theme.space[2])
  })
})
