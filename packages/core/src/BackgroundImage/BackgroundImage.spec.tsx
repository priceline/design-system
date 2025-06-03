import { render, screen } from '../__test__/testing-library'
import { BackgroundImage } from './BackgroundImage'

describe('BackgroundImage', () => {
  test('renders', () => {
    const { asFragment } = render(<BackgroundImage />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with image', () => {
    const { asFragment } = render(<BackgroundImage image='hello.png' />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with height', () => {
    const { asFragment } = render(<BackgroundImage height='320px' />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with border radius', () => {
    const { asFragment } = render(
      <BackgroundImage height='320px' borderRadius='full' rounded='top' data-testid='background-image' />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with background position', () => {
    render(
      <BackgroundImage
        height='320px'
        borderRadius='full'
        rounded='top'
        backgroundPosition='top'
        data-testid='background-image'
      />
    )

    const element = screen.getByTestId('background-image')
    expect(element).toHaveStyleRule('background-position', 'top')
  })

  test('renders with default background position', () => {
    render(
      <BackgroundImage height='320px' borderRadius='full' rounded='top' data-testid='background-image' />
    )
    const element = screen.getByTestId('background-image')
    expect(element).toHaveStyleRule('background-position', 'center')
  })

  describe('variations', () => {
    describe('parallax variation', () => {
      test('default render', () => {
        render(<BackgroundImage variation='parallax' image='hello.png' data-testid='background-image' />)
        const element = screen.getByTestId('background-image')
        expect(element).toHaveStyleRule('background-attachment', 'fixed')
      })
    })
  })
})
