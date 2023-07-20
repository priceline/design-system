import { Truncate } from '.'
import { render } from '../__test__/testing-library'

describe('Truncate', () => {
  test('generates styles', () => {
    const { asFragment, container } = render(<Truncate>generates styles</Truncate>)

    expect(asFragment()).toMatchSnapshot()

    const json = container.firstChild?.firstChild

    expect(json).toHaveStyleRule('overflow', 'hidden')
    expect(json).toHaveStyleRule('white-space', 'nowrap')
    expect(json).toHaveStyleRule('text-overflow', 'ellipsis')
  })
})
