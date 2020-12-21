import React from 'react'
import { render, fireEvent } from 'testing-library'
import { Warning, Emoticon } from 'pcln-icons'
import { Text } from '../Text'
import { Image } from '../Image'
import { GenericBanner, theme } from '.'

const props = {
  p: 2,
  heading: (
    <Text.span fontWeight='bold' textColor='primary.base'>
      COVID-19&nbsp;&nbsp;
    </Text.span>
  ),
  text: (
    <Text.span textColor='primary.base'>
      Update: Your travel may be impacted. Please review this hotels important
      info.&nbsp;&nbsp;
    </Text.span>
  ),
  ctaText: (
    <Text.span
      fontSize={[0, null, null, 1]}
      textColor='primary.base'
      fontWeight='bold'
    >
      Read More
    </Text.span>
  ),
  imageLeft: <Image alt='ImageLeft' />,
  iconLeft: <Warning />,
  iconRight: <Emoticon />,
  color: 'caution.light',
}

describe('GenericBanner', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<GenericBanner />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('Renders as expected-onclick', () => {
    const buttonClick = jest.fn()
    const { getByText } = render(
      <GenericBanner {...props} buttonClick={buttonClick} />
    )
    expect(getByText('COVID-19')).toBeTruthy()
    expect(
      getByText(
        'Update: Your travel may be impacted. Please review this hotels important info.'
      )
    ).toBeTruthy()
    const readMoreButton = getByText('Read More')
    expect(readMoreButton).toBeTruthy()
    fireEvent.click(readMoreButton)
    expect(buttonClick).toHaveBeenCalled()
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
    expect(getByRole('img')).toBeTruthy()
    expect(getByText('COVID-19')).toBeTruthy()
    expect(
      getByText(
        'Update: Your travel may be impacted. Please review this hotels important info.'
      )
    ).toBeTruthy()
    const readMoreButton = getByText('Read More')
    expect(readMoreButton).toBeTruthy()
    fireEvent.click(readMoreButton)
  })
})
