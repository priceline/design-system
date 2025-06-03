import { Key as KeyIcon } from 'pcln-icons'
import { fireEvent, render } from '../__test__/testing-library'
import { IconButton } from './IconButton'

describe('IconButton', () => {
  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    const { getByRole } = render(<IconButton icon={<KeyIcon />} onClick={handleClick} />)

    fireEvent.click(getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })

  test('renders without background color in disabled state', () => {
    const { container } = render(<IconButton icon={<KeyIcon />} disabled />)

    const button = container.querySelector('button:disabled')
    expect(button).toHaveStyleRule('background-color', 'transparent')
  })

  test('renders without props', () => {
    const { asFragment } = render(<IconButton icon={<KeyIcon />} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
