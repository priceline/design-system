import { render } from '../__test__/testing-library'
import { BlockLink } from './BlockLink'

describe('BlockLink', () => {
  test('renders', () => {
    const { asFragment } = render(<BlockLink>raw text</BlockLink>)
    expect(asFragment()).toMatchSnapshot()
  })
})
