import { render } from '../__test__/testing-library'
import { SrOnly } from './SrOnly'

describe('SrOnly', () => {
  test('renders with approprite styles to display offscreen', () => {
    const { asFragment } = render(<SrOnly />)
    expect(asFragment()).toMatchSnapshot()
  })
})
