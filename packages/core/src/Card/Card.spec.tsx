import { Card } from '..'
import { render } from '../__test__/testing-library'

describe('Card', () => {
  test('renders', () => {
    console.error = jest.fn()
    const { asFragment } = render(<Card borderWidth={0} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
