import { render } from '../__test__/testing-library'
import { TextArea } from '..'

const id = 'fake-test-id'

describe('TextArea', () => {
  test('it renders', () => {
    const { asFragment } = render(<TextArea id={id} />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('it renders an input element with a red border with a color prop is passed', () => {
    const { asFragment } = render(<TextArea id={id} color='error' />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('it renders an input element with a really large padding and margin', () => {
    const { asFragment } = render(<TextArea id={id} p={4} m={4} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
