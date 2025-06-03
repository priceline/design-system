import { render, screen } from '../__test__/testing-library'
import { Text } from './Text'

describe('Text', () => {
  test('renders', () => {
    const { asFragment } = render(<Text />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('textAlign prop sets text-align', () => {
    const { asFragment } = render(<Text textAlign='center' />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('regular prop sets font-weight', () => {
    const { asFragment } = render(<Text regular />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('bold prop sets font-weight', () => {
    const { asFragment } = render(<Text bold />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('caps prop sets text-transform', () => {
    const { asFragment } = render(<Text caps />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('fontSize prop sets font-size', () => {
    const { rerender, asFragment } = render(<Text fontSize={0}>Text</Text>)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Text fontSize={1}>Text</Text>)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Text fontSize={2}>Text</Text>)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Text fontSize={3}>Text</Text>)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Text fontSize={4}>Text</Text>)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Text fontSize={5}>Text</Text>)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Text fontSize={6}>Text</Text>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('mt prop sets margin-top', () => {
    const { asFragment } = render(<Text mt={2} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('display and overflow', () => {
    const { asFragment } = render(<Text display='inline-block' overflow='none' />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('height and width', () => {
    const { asFragment } = render(<Text height={150} width={200} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('min/max values', () => {
    const { asFragment } = render(<Text minHeight={200} maxHeight={400} minWidth={200} maxWidth={400} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('fontStyle', () => {
    render(<Text fontStyle='italic'>Italic Text</Text>)
    expect(screen.getByText('Italic Text')).toHaveStyleRule('font-style', 'italic')
  })

  test('textDecoration', () => {
    render(<Text textDecoration='underline'>Underlined Text</Text>)
    expect(screen.getByText('Underlined Text')).toHaveStyleRule('text-decoration', 'underline')
  })

  test('textTransform', () => {
    render(<Text textTransform='lowercase'>Lowercase Text</Text>)
    expect(screen.getByText('Lowercase Text')).toHaveStyleRule('text-transform', 'lowercase')
  })
})
