import React from 'react'
import { render } from '@priceline/react-jesting-library'
import Motion from './Motion'

describe('Motion', () => {
  test('isAnimatedState = null (default)', () => {
    const { getByTestId, getByText } = render(
      <Motion isAnimatedState={null} variation='GROW_CENTER'>
        Child Text
      </Motion>
    )

    //Child elements should render
    getByText('Child Text')

    //Wrapper Styling should be in the rest state
    const wrapper = getByTestId('motion-wrapper')
    expect(wrapper).toHaveStyleRule('visibility', 'hidden')
    expect(wrapper).toHaveStyleRule('animation', undefined)
  })

  test('isAnimatedState = false', () => {
    const { getByTestId } = render(<Motion isAnimatedState={false} variation='GROW_CENTER' />)
    const wrapper = getByTestId('motion-wrapper')
    expect(wrapper).toHaveStyleRule(
      'animation',
      expect.stringContaining('150ms cubic-bezier(0.5,0,1,1) forwards')
    )
  })

  test('isAnimatedState = true', () => {
    const { getByTestId } = render(<Motion isAnimatedState={true} variation='GROW_CENTER' />)
    const wrapper = getByTestId('motion-wrapper')
    expect(wrapper).toHaveStyleRule(
      'animation',
      expect.stringContaining('300ms cubic-bezier(0,0,0.25,1) forwards')
    )
  })
})
