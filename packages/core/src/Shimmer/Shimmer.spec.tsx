import React from 'react'
import { render } from '../__test__/testing-library'
import { Shimmer } from '..'

describe('Shimmer', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<Shimmer height='50px' width='100px' />)
    const wrapper = getByTestId('Shimmer__Wrapper')
    const glare = getByTestId('Shimmer__Glare')

    expect(wrapper).toHaveStyleRule('background-color', '#EEEEEE')
    expect(wrapper).toHaveStyleRule('height', '50px')
    expect(wrapper).toHaveStyleRule('width', '100px')
    expect(glare).toHaveStyleRule('animation', expect.stringContaining('1.2s ease-in-out infinite'))
  })

  test('should render light variation correctly', () => {
    const { getByTestId } = render(<Shimmer height='50px' width='100px' variation='light' />)
    const wrapper = getByTestId('Shimmer__Wrapper')
    const glare = getByTestId('Shimmer__Glare')

    expect(wrapper).toHaveStyleRule('background-color', '#00000014')
    expect(glare).toHaveStyleRule('animation', expect.stringContaining('1.2s ease-in-out infinite'))
  })

  test('should render dark variation correctly', () => {
    const { getByTestId } = render(<Shimmer height='50px' width='100px' variation='dark' />)
    const wrapper = getByTestId('Shimmer__Wrapper')
    const glare = getByTestId('Shimmer__Glare')

    expect(wrapper).toHaveStyleRule('background-color', '#FFFFFF14')
    expect(wrapper).toHaveStyleRule('height', '50px')
    expect(wrapper).toHaveStyleRule('width', '100px')
    expect(glare).toHaveStyleRule('animation', expect.stringContaining('1.2s ease-in-out infinite'))
  })
})
