import React from 'react'
import { render } from 'testing-library'
import { Shimmer } from '..'

describe('Shimmer', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<Shimmer height='50px' width='100px' />)
    const wrapper = getByTestId('Shimmer__Wrapper')
    const glare = getByTestId('Shimmer__Glare')

    expect(wrapper).toHaveStyleRule('background-color', '#eee')
    expect(wrapper).toHaveStyleRule('height', '50px')
    expect(wrapper).toHaveStyleRule('width', '100px')
    expect(glare).toHaveStyleRule('animation', expect.stringContaining('1.2s ease-in-out infinite'))
  })
})
