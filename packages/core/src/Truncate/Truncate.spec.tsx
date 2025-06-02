import { render, screen } from '../__test__/testing-library'
import { Truncate } from './Truncate'

describe('Truncate', () => {
  test('renders', () => {
    const { asFragment } = render(<Truncate>renders</Truncate>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('generates styles', () => {
    render(<Truncate data-testid='truncate'>generates styles</Truncate>)
    const element = screen.getByTestId('truncate')
    expect(element).toHaveStyleRule('overflow', 'hidden')
    expect(element).toHaveStyleRule('white-space', 'nowrap')
    expect(element).toHaveStyleRule('text-overflow', 'ellipsis')
  })
})
