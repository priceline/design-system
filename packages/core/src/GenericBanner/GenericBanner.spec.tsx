import { Emoticon, Warning } from 'pcln-icons'
import { fireEvent, render } from '../__test__/testing-library'
import { Image } from '../Image/Image'
import { Text } from '../Text/Text'
import { GenericBanner } from './GenericBanner'

const props = {
  p: 2,
  heading: (
    <Text.span fontWeight='bold' textColor='primary.base' mr={1}>
      COVID-19
    </Text.span>
  ),
  text: (
    <Text.span textColor='primary.base' mr={1}>
      Update: Your travel may be impacted. Please review this hotels important info.
    </Text.span>
  ),
  ctaText: (
    <Text.span textColor='primary.base' fontWeight='bold'>
      Read More
    </Text.span>
  ),
  imageLeft: <Image alt='ImageLeft' />,
  iconLeft: <Warning />,
  iconRight: <Emoticon />,
  color: 'caution.light',
}

const propsUpdatedHeading = {
  ...props,
  heading: (
    <Text.span fontWeight='bold' textColor='primary.base' mr={1} fontSize={4}>
      COVID-19
    </Text.span>
  ),
}

describe('GenericBanner', () => {
  test('renders', () => {
    const { asFragment } = render(<GenericBanner />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Renders as expected-onclick', () => {
    const buttonClick = jest.fn()
    const { getByText } = render(<GenericBanner {...props} buttonClick={buttonClick} />)
    const header = getByText('COVID-19')
    const text = getByText('Update: Your travel may be impacted. Please review this hotels important info.')
    expect(header).toBeTruthy()
    expect(text).toBeTruthy()
    const readMoreButton = getByText('Read More')
    expect(readMoreButton).toBeTruthy()
    fireEvent.click(readMoreButton)
    expect(buttonClick).toHaveBeenCalled()
    expect(readMoreButton).toHaveStyleRule('font-size', '12px')
    expect(header).toHaveStyleRule('font-size', '12px')
    expect(text).toHaveStyleRule('font-size', '12px')
  })
  test('Renders as expected- url', () => {
    const { getByText, getByRole } = render(
      <GenericBanner
        {...props}
        URLProps={{
          href: 'https://www.priceline.com',
          target: '_blank',
        }}
      />
    )
    const header = getByText('COVID-19')
    const text = getByText('Update: Your travel may be impacted. Please review this hotels important info.')
    expect(getByRole('img')).toBeTruthy()
    expect(header).toBeTruthy()
    expect(text).toBeTruthy()
    const readMoreButton = getByText('Read More')
    expect(readMoreButton).toBeTruthy()
    fireEvent.click(readMoreButton)
    expect(readMoreButton).toHaveStyleRule('font-size', '12px')
    expect(header).toHaveStyleRule('font-size', '12px')
    expect(text).toHaveStyleRule('font-size', '12px')
  })
  test('Renders as expected- with different heading size', () => {
    const { getByText, getByRole } = render(
      <GenericBanner
        {...propsUpdatedHeading}
        URLProps={{
          href: 'https://www.priceline.com',
          target: '_blank',
        }}
      />
    )
    const header = getByText('COVID-19')
    const text = getByText('Update: Your travel may be impacted. Please review this hotels important info.')
    expect(getByRole('img')).toBeTruthy()
    expect(header).toBeTruthy()
    expect(text).toBeTruthy()
    const readMoreButton = getByText('Read More')
    expect(readMoreButton).toBeTruthy()
    fireEvent.click(readMoreButton)
    expect(readMoreButton).toHaveStyleRule('font-size', '12px')
    expect(header).toHaveStyleRule('font-size', '24px')
    expect(text).toHaveStyleRule('font-size', '12px')
  })
})
