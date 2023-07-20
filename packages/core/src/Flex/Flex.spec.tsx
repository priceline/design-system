import { Flex } from '..'
import { render } from '../__test__/testing-library'

describe('Flex', () => {
  test('renders', () => {
    const { asFragment } = render(<Flex />)
    expect(asFragment()).toMatchSnapshot()
  })
})
