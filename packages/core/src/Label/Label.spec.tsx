import { fireEvent, render, screen } from '../__test__/testing-library'
import { Label } from './Label'

describe('Label', () => {
  test('it renders', () => {
    const { asFragment } = render(<Label />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('Label hidden renders', () => {
    render(<Label hidden>Label Children</Label>)

    expect(screen.getByText('Label Children')).toHaveStyleRule('position', 'absolute')
    expect(screen.getByText('Label Children')).toHaveStyleRule('width', '1px')
    expect(screen.getByText('Label Children')).toHaveStyleRule('height', '1px')
    expect(screen.getByText('Label Children')).toHaveStyleRule('clip', 'rect(1px,1px,1px,1px)')
  })

  test('Label nowrap renders', () => {
    render(<Label nowrap>Label Children</Label>)

    expect(screen.getByText('Label Children')).toHaveStyleRule('white-space', 'nowrap')
  })

  test('Label truncate renders', () => {
    render(<Label truncate>Label Children</Label>)

    expect(screen.getByText('Label Children')).toHaveStyleRule('white-space', 'nowrap')
    expect(screen.getByText('Label Children')).toHaveStyleRule('overflow', 'hidden')
    expect(screen.getByText('Label Children')).toHaveStyleRule('text-overflow', 'ellipsis')
  })

  test('Label width renders', () => {
    render(
      <Label width={1 / 2} nowrap>
        Label Children
      </Label>
    )

    expect(screen.getByText('Label Children')).toHaveStyleRule('white-space', 'nowrap')
    expect(screen.getByText('Label Children')).toHaveStyleRule('width', '50%')
  })

  test('Label clickable renders with cursor pointer', () => {
    const mockOnClick = jest.fn()
    render(<Label onClick={mockOnClick}>Clickable Label</Label>)

    const label = screen.getByText('Clickable Label')
    expect(label).toHaveStyleRule('cursor', 'pointer')

    expect(mockOnClick).toHaveBeenCalledTimes(0)
    fireEvent.click(label)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
