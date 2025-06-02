import { render, screen } from '../__test__/testing-library'
import { theme } from '../theme/theme'
import { Heading } from './Heading'

describe('Heading', () => {
  test('renders', () => {
    const { asFragment } = render(<Heading />)
    expect(asFragment()).toMatchSnapshot()
  })

  const dotNotationTestCase = 'Heading component with h1-h6 dot-notation'
  test(dotNotationTestCase, () => {
    const { rerender, asFragment } = render(<Heading.h1 />)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Heading.h2 />)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Heading.h3 />)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Heading.h4 />)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Heading.h5 />)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Heading.h6 />)
    expect(asFragment()).toMatchSnapshot()
  })

  const defaultFontSizeTestCase = 'Heading component with no default font size, when "fontSize" prop not used'
  test(defaultFontSizeTestCase, () => {
    const { asFragment } = render(<Heading />)
    expect(asFragment()).toMatchSnapshot()
  })

  const usingTextPropsTestCase = 'Heading component using <Text> component properties'
  test(usingTextPropsTestCase, () => {
    render(
      <Heading textAlign='center' color='gray' data-testid='heading'>
        Heading
      </Heading>
    )
    const element = screen.getByTestId('heading')
    expect(element).toHaveStyleRule('text-align', 'center')
    expect(element).toHaveStyleRule('color', theme.colors.gray)
  })
})
