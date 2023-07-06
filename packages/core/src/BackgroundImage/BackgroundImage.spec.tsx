import { describe, expect, it } from 'vitest'
import { render } from '../__test__/testing-library'
import { BackgroundImage, theme } from '..'

describe('BackgroundImage', () => {
  it('renders', () => {
    const { asFragment } = render(<BackgroundImage />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with image', () => {
    const { asFragment } = render(<BackgroundImage image='hello.png' />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with height', () => {
    const { asFragment } = render(<BackgroundImage height='320px' />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with border radius', () => {
    const { asFragment } = render(<BackgroundImage height='320px' borderRadius='full' rounded='top' />)
    expect(asFragment()).toMatchSnapshot()
    const {
      borderRadii: { full },
    } = theme
    expect(json).toHaveStyleRule('border-radius', `${full} ${full} 0 0`)
  })

  describe('variations', () => {
    describe('parallax', () => {
      it('default render', () => {
        const { asFragment } = render(<BackgroundImage variation='parallax' image='hello.png' />)
        expect(asFragment()).toMatchSnapshot()
        expect(json).toHaveStyleRule('background-attachment', 'fixed')
      })
    })
  })
})
