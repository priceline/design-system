import { render } from '../__test__/testing-library'
import { Radio } from './Radio'

describe('Radio', () => {
  test('Selected, rendering', () => {
    const { asFragment } = render(<Radio checked />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('Not Selected, rendering', () => {
    const { asFragment } = render(<Radio />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('Disabled, rendering', () => {
    const { asFragment } = render(<Radio disabled />)
    expect(asFragment()).toMatchSnapshot()
  })
})
