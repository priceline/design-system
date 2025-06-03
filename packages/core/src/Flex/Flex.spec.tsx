import { render, screen } from '../__test__/testing-library'
import { Flex } from './Flex'

describe('Flex', () => {
  test('renders', () => {
    const { asFragment } = render(<Flex />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('alignItems prop', () => {
    render(<Flex alignItems='center' data-testid='flex' />)
    const element = screen.getByTestId('flex')
    expect(element).toHaveStyleRule('align-items', 'center')
  })

  test('justifyContent prop', () => {
    render(<Flex justifyContent='space-between' data-testid='flex' />)
    const element = screen.getByTestId('flex')
    expect(element).toHaveStyleRule('justify-content', 'space-between')
  })

  test('flexWrap prop', () => {
    render(<Flex flexWrap='wrap' data-testid='flex' />)
    const element = screen.getByTestId('flex')
    expect(element).toHaveStyleRule('flex-wrap', 'wrap')
  })
})
