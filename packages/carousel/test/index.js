/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import { shallowWithTheme, mountWithTheme } from 'enzyme-theme-utils'
import { Image, theme } from 'pcln-design-system'
import Carousel from '../src'

let carousel, wrapper

const images = [
  'https://via.placeholder.com/150/abcdef/111111?text=1',
  'https://via.placeholder.com/150/abcdef/111111?text=2',
  'https://via.placeholder.com/150/abcdef/111111?text=3',
  'https://via.placeholder.com/150/abcdef/111111?text=4',
  'https://via.placeholder.com/150/abcdef/111111?text=5',
  'https://via.placeholder.com/150/abcdef/111111?text=6',
  'https://via.placeholder.com/150/abcdef/111111?text=7',
  'https://via.placeholder.com/150/abcdef/111111?text=8',
  'https://via.placeholder.com/150/abcdef/111111?text=9',
  'https://via.placeholder.com/150/abcdef/111111?text=10',
  'https://via.placeholder.com/150/abcdef/111111?text=11',
  'https://via.placeholder.com/150/abcdef/111111?text=12',
  'https://via.placeholder.com/150/abcdef/111111?text=13',
  'https://via.placeholder.com/150/abcdef/111111?text=14',
  'https://via.placeholder.com/150/abcdef/111111?text=15',
  'https://via.placeholder.com/150/abcdef/111111?text=16',
  'https://via.placeholder.com/150/abcdef/111111?text=17'
]

const items = images.map((image, index) => <Image key={index} src={image} />)

describe('Swipe and Click functions', () => {
  beforeEach(() => {
    carousel = (
      <Carousel updateCurrentItemIndex={jest.fn()} currentImageItem={0}>
        {items}
      </Carousel>
    )
    wrapper = mountWithTheme(carousel, theme)
    window.innerWidth = 320
  })

  afterAll(() => {
    window.innerWidth = 0
  })

  test('handleSwipingLeft', () => {
    const inst = wrapper.instance()
    inst.handleSwipingLeft({}, 50)
    expect(wrapper.state().currentItemTranslate).toBe(-15.625)
    inst.handleSwipingLeft({}, 322)
    expect(wrapper.state().currentItemTranslate).toBe(-100)
  })

  test('handleSwipingRight', () => {
    const inst = wrapper.instance()
    inst.handleSwipingRight({}, 50)
    expect(wrapper.state().currentItemTranslate).toBe(15.625)
    expect(wrapper.state().isSwiping).toBeTruthy()
    inst.handleSwipingRight({}, 322)
    expect(wrapper.state().currentItemTranslate).toBe(100)
  })

  test('handleSwipedLeft, no updateCurrentItemIndex props', () => {
    carousel = <Carousel currentImageIndex={0}>{items}</Carousel>
    wrapper = shallow(carousel)
    const inst = wrapper.instance()
    inst.handleSwipedLeft({}, 85)
    expect(wrapper.state().internalCurrentItemIndex).toBe(1)
    expect(wrapper.state().currentItemTranslate).toBe(0)
    expect(wrapper.state().isSwiping).toBeFalsy()
    inst.handleSwipedLeft({}, null)
    expect(wrapper.state().internalCurrentItemIndex).toBe(2)
    inst.handleSwipedLeft({}, 30)
    expect(wrapper.state().currentItemTranslate).toBe(0)
  })

  test('handleSwipedRight, no updateCurrentItemIndex props', () => {
    carousel = <Carousel currentImageIndex={0}>{items}</Carousel>
    wrapper = shallow(carousel)
    const inst = wrapper.instance()
    inst.handleSwipedRight({}, -85)
    expect(wrapper.state().internalCurrentItemIndex).toBe(16)
    expect(wrapper.state().currentItemTranslate).toBe(0)
    expect(wrapper.state().isSwiping).toBeFalsy()
    inst.handleSwipedRight({}, null)
    expect(wrapper.state().internalCurrentItemIndex).toBe(15)
    inst.handleSwipedRight({}, -30)
    expect(wrapper.state().currentItemTranslate).toBe(0)
  })

  test('updateSelectedItem, no updateCurrentItemIndex props', () => {
    carousel = <Carousel currentImageIndex={0}>{items}</Carousel>
    wrapper = mountWithTheme(carousel, theme)
    const dot4 = wrapper.find('Dot').at(3)
    dot4.simulate('click')
    expect(wrapper.state().internalCurrentItemIndex).toBe(3)
  })
})

describe('Carousel', () => {
  test('Does not error with no props', () => {
    wrapper = shallowWithTheme(<Carousel />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })

  test('renders correctly', () => {
    carousel = <Carousel shouldShowArrows>{items}</Carousel>
    wrapper = shallowWithTheme(carousel).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
