import { BackgroundImage } from '..'
import { render } from '../__test__/testing-library'

describe('BackgroundImage', () => {
  test('renders', () => {
    const { asFragment } = render(<BackgroundImage />)
    expect(asFragment()).toMatchSnapshot()
  })
})
