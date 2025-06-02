import { render } from '../__test__/testing-library'
import { Container } from './Container'

describe('Container', () => {
  test('renders with default theme max-width', () => {
    const { asFragment } = render(<Container />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with maxWidth', () => {
    const { asFragment } = render(<Container maxWidth={1024} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with size', () => {
    const { getByTestId } = render(<Container size='md' data-testid='container' />)

    expect(getByTestId('container')).toHaveStyleRule('max-width', '768px')
  })
})
