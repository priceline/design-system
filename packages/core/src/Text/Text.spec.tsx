import { Text } from '..'
import { render } from '../__test__/testing-library'

describe('Text', () => {
  test('renders', () => {
    const { asFragment } = render(<Text />)
    expect(asFragment()).toMatchSnapshot()
  })
})
